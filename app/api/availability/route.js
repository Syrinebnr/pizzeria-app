import db from "@/lib/db";

const MAX_CAPACITY = 20;

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");

    if (!date) {
      return Response.json(
        {
          success: false,
          error: "Een datum is verplicht.",
        },
        { status: 400 }
      );
    }

    const [rows] = await db.query(
      `SELECT reservation_time, SUM(guests) AS booked
       FROM reservations
       WHERE reservation_date = ?
       GROUP BY reservation_time`,
      [date]
    );

    const bookedByTime = {};

    rows.forEach((row) => {
      const time = String(row.reservation_time).slice(0, 5);
      bookedByTime[time] = Number(row.booked);
    });

    const timeSlots = [
      "18:00",
      "18:30",
      "19:00",
      "19:30",
      "20:00",
      "20:30",
      "21:00",
    ];

    const availability = timeSlots.map((time) => {
      const booked = bookedByTime[time] || 0;
      const remaining = MAX_CAPACITY - booked;

      return {
        time,
        booked,
        remaining: Math.max(remaining, 0),
        available: remaining > 0,
      };
    });

    return Response.json({
      success: true,
      date,
      capacity: MAX_CAPACITY,
      availability,
    });
  } catch (error) {
    console.error("AVAILABILITY ERROR:", error);

    return Response.json(
      {
        success: false,
        error: "Beschikbaarheid kon niet worden opgehaald.",
      },
      { status: 500 }
    );
  }
}