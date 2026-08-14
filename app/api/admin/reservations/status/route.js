import db from "@/lib/db";

export async function PATCH(request) {
  try {
    const body = await request.json();

    const { id, status } = body;

    if (!id) {
      return Response.json(
        {
          success: false,
          error: "Reservatie-ID ontbreekt.",
        },
        { status: 400 }
      );
    }

    const allowedStatuses = [
      "nieuw",
      "bevestigd",
      "geannuleerd",
    ];

    if (!allowedStatuses.includes(status)) {
      return Response.json(
        {
          success: false,
          error: "Ongeldige status.",
        },
        { status: 400 }
      );
    }

    const [result] = await db.query(
      `
      UPDATE reservations
      SET status = ?
      WHERE id = ?
      `,
      [status, id]
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
      message: "Reservatiestatus aangepast.",
    });
  } catch (error) {
    console.error("Status update error:", error);

    return Response.json(
      {
        success: false,
        error: "Status kon niet worden aangepast.",
      },
      { status: 500 }
    );
  }
}