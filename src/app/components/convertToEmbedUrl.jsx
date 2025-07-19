function convertToEmbedURL(url) {
  // no url I want nothing to show
  if (!url) return "";

  if (url.includes("youtube.com/shorts/")) {
    return url.replace("youtube.com/shorts/", "youtube.com/embed/");
  }

  if (url.includes("youtube.com/watch?v=")) {
    const videoId = url.split("v=")[1].split("&")[0]; // I want to change all videos to be embeded, this removes the timestamp of YT links and the v= leaving the video ID only, I can then place this in the link below to make it embed.
    return `https://www.youtube.com/embed/${videoId}`;
  }

  if (url.includes("youtu.be/")) {
    const vbeId = url.split();
  }
}
