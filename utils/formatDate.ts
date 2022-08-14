export default function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-EN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
