import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("test"); // replace with your DB name
    const collections = await db.listCollections().toArray();
    return Response.json({ ok: true, collections });
  } catch (error) {
    return Response.json({ ok: false, error: error.message });
  }
}
