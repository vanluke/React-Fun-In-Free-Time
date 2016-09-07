const times = [
  { value: 31536000, format: 'y' },
  { value: 2592000, format: 'month(s)' },
  { value: 86400, format: 'd' },
  { value: 3600, format: 'h' },
  { value: 60, format: 'm' }
];

export const timeAgo = function(date) {
  const seconds = Math
    .floor(((new Date().getTime() / 1000) - (new Date(date).getTime() / 1000)));
  for (const t of times) {
    const interval = Math.floor(seconds / t.value);
    if (interval > 1) {
      return `${interval}${t.format} ago`;
    }
  }
  return `${Math.floor(seconds)}s ago`;
};
