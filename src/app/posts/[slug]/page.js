import PostCard from "@/app/components/PostCard";
import pg from "pg";

export default async function GlitchPage({ params }) {
  const { slug } = await params;

  const db = new pg.Pool({ connectionString: process.env.DB_CONN });

  const glitchDetails = (
    await db.query(`SELECT * FROM posts WHERE slug = $1`, [slug])
  ).rows[0];

  console.log(glitchDetails);
  return (
    <div>
      <h2>{glitchDetails.title}</h2>
      <PostCard post={glitchDetails} />
    </div>
  );
}
