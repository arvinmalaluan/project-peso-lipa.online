export function formatTimeByTimeUnits(timestamp) {
  const currentTime = new Date();
  const delta = (currentTime.getTime() - timestamp) / 1000; // Convert milliseconds to seconds

  if (delta < 60) {
    return `${Math.floor(delta)} s`;
  } else if (delta < 3600) {
    return `${Math.floor(delta / 60)}m`;
  } else if (delta < 86400) {
    return `${Math.floor(delta / 3600)}h`;
  } else if (delta < 604800) {
    return `${Math.floor(delta / 86400)}d`;
  } else if (delta < 31536000) {
    return `${Math.floor(delta / 604800)}w`;
  } else {
    return `${Math.floor(delta / 31536000)}y`;
  }
}
