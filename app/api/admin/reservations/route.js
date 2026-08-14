import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(`
      SELECT
  id,
  name,
  email,
  phone,
  reservation_date,
  reservation_time,
  guests,
  message,
  created_at,
  status
FROM reservations
      ORDER BY reservation_date ASC, reservation_time ASC
    `);

    return Response.json({
      success: true,
      reservations: rows,
    });
  } catch (error) {
    console.error("Admin reservations error:", error);

    return Response.json(
      {
        success: false,
        error: "Reservaties konden niet worden geladen.",
      },
      { status: 500 }
    );
  }
}