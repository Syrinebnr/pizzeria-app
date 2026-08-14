import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query("SELECT 1 AS connected");

    return Response.json({
      success: true,
      database: "MySQL verbonden",
      result: rows,
    });
  } catch (error) {
    console.error("MYSQL ERROR:", error);

    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}