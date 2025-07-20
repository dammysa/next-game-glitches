import PostCard from "@/app/components/PostCard";
import pg from "pg";

export default async function GlitchPage({ params }) {
  const { id } = await params;

  const db = new pg.Pool({ connectionString: process.env.DB_CONN });

  const glitchDetails = (
    await db.query(`SELECT * FROM posts WHERE id = $1`, [id])
  ).rows[0];

  console.log(glitchDetails);
  return (
    <div>
      <PostCard post={glitchDetails} />
    </div>
  );
}
