const timeSince = (date) => {
  var seconds = Math.floor(((new Date().getTime() / 1000) - date)),
    interval = Math.floor(seconds / 31536000);

  if (interval > 1) return interval + " year(s) ago";
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) return interval + " month(s) ago";
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) return interval + " day(s) ago";
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) return interval + " hour(s) ago";
  interval = Math.floor(seconds / 60);
  if (interval > 1) return interval + " min(s) ago";
  return Math.floor(seconds) + " secs ago";
}

export {
  timeSince
};
