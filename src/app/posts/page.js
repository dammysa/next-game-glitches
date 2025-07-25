import Link from "next/link";
import pg from "pg";
import slugify from "slugify";

import PostCard from "../components/PostCard";

export default async function PrimaryPage() {
  const db = new pg.Pool({ connectionString: process.env.DB_CONN });

  const res = await db.query(`SELECT * FROM posts`);
  const posts = res.rows;

  console.log(posts);

  {
    /*https://www.npmjs.com/package/slugify - I could have also just made a function with .toLowercase() .replace etc*/
  }
  return (
    <div>
      <h1>All Glitches</h1>
      <Link href="/posts/new" className="text-blue-400 hover:underline">
        Submit a New Glitch
      </Link>
      {posts.map((post) => (
        <div key={post.id}>
          <Link
            href={`/posts/${slugify(post.title, {
              lower: true,
              locale: "en",
            })}`}
          >
            <h2>{post.title}</h2>
          </Link>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
