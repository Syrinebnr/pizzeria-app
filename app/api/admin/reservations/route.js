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

export async function DELETE(request) {
  try {
    const body = await request.json();
    const id = Number(body.id);

    if (!id || !Number.isInteger(id)) {
      return Response.json(
        {
          success: false,
          error: "Ongeldig reservatie-ID.",
        },
        { status: 400 }
      );
    }

    const [result] = await db.query(
      "DELETE FROM reservations WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return Response.json(
        {
          success: false,
          error: "Reservatie niet gevonden.",
        },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      message: "Reservatie verwijderd.",
    });
  } catch (error) {
    console.error("Delete reservation error:", error);

    return Response.json(
      {
        success: false,
        error: "Reservatie kon niet worden verwijderd.",
      },
      { status: 500 }
    );
  }
}