import convertToEmbedURL from "./convertToEmbedUrl";

export default function PostCard({ post }) {
  const { game, username, description, video_url } = post;
  return (
    <div>
      <p>Game: {game}</p>
      <p>By: {username}</p>
      <p>{description}</p>
      {video_url && (
        <iframe
          width="500"
          height="300"
          src={convertToEmbedURL(video_url)}
          title="Glitch Video"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
