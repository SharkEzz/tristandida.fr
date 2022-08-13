export default function getDirectusImagePath(
  id: string,
  key: 'medium' | 'small' | null = null,
) {
  return `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${id}${
    key ? `?key=${key}` : ''
  }`;
}
