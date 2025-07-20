"use client";

import pg from "pg";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function NewPost() {
  async function handleSubmit(formData) {
    "use server";

    const data = Object.fromEntries(formData);
    const { title, game, description, video_url, username } = data;

    const db = new pg.Pool({ connectionString: process.env.DB_CONN });

    const slug = slugify(post.title);

    const newPost = await db.query(
      `INSERT INTO posts (title, game, description, video_url, usernam, slug)
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [title, game, description, video_url, username || "Anonymous", slug]
    );
    console.log(newPost.rows);

    revalidatePath("/posts");

    redirect("/posts");
  }

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        alignSelf: "center",
      }}
      action={handleSubmit}
    >
      <input name="title" placeholder="Title" required />
      <input name="game" placeholder="Game" required />
      <input name="description" placeholder="description" required />
      <input name="video_url" placeholder="Youtube Video URL" required />
      <input name="username" placeholder="Your name" required type="date" />
      <button type="submit" style={{ marginTop: "1rem" }}>
        Submit Post
      </button>
    </form>
  );
}

// I followed the example https://github.com/Tech-Educators/software-dev-020/blob/main/demos/week08/06-server-functions-forms/src/app/books/add-book/page.js
