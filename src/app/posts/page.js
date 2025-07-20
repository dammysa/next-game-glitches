import Link from "next/link";
import pg from "pg";
import slugify from "slugify";

import PostCard from "./components/PostCard";

export default async function PrimaryPage() {
  const db = new pg.Pool({ connectionString: process.env.DB_CONN });

  const res = await db.query(`SELECT * FROM posts`);
  const posts = res.rows;

  console.log(posts);

  return (
    <div>
      <h1>All Glitches</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <Link
            href={`/posts/${slugify(post.title, {
              lower: true,
              locale: "en",
            })}`}
          >
            {" "}
            {/* ^This auto completed with prettier */}
            {/*https://www.npmjs.com/package/slugify - I could have also just made a function with .toLowercase() .replace etc*/}
            <h2>{post.title}</h2>
          </Link>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
