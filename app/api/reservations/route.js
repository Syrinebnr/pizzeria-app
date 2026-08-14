import db from "@/lib/db";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      reservation_date,
      reservation_time,
      guests,
      message,
    } = body;

    if (!name || !email || !reservation_date || !reservation_time || !guests) {
      return Response.json(
        {
          success: false,
          error: "Vul alle verplichte velden in.",
        },
        { status: 400 }
      );
    }

    const [result] = await db.query(
      `INSERT INTO reservations
      (name, email, phone, reservation_date, reservation_time, guests, message)
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        email,
        phone || null,
        reservation_date,
        reservation_time,
        guests,
        message || null,
      ]
    );

    return Response.json({
      success: true,
      reservationId: result.insertId,
    });
  } catch (error) {
    console.error("RESERVATION ERROR:", error);

    return Response.json(
      {
        success: false,
        error: "Reservering kon niet worden opgeslagen.",
      },
      { status: 500 }
    );
  }
}