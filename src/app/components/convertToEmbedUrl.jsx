export default function convertToEmbedURL(url) {
  if (url.includes("youtube.com/shorts/")) {
    return url.replace("youtube.com/shorts/", "youtube.com/embed/");
  }

  if (url.includes("youtube.com/watch?v=")) {
    const videoId = url.split("v=")[1].split("&")[0]; // I want to change all videos to be embeded, this removes the timestamp of YT links and the v= leaving the video ID only, I can then place this in the link below to make it embed. This really confused me as I want [1] which is the second part after v=, I dont need [0] which links to "youtube.com/watch?" after this I make a second split where I do want [0].
    return `https://www.youtube.com/embed/${videoId}`;
  }

  // from the share button on YT the URL will be https://youtu.be/ this does not work with embeded links
  if (url.includes("youtu.be/")) {
    const vbeId = url.split("be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${vbeId}`;
  }
  return url;
}
