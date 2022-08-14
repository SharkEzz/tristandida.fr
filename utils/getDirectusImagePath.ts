export default function getDirectusImagePath(
  id: string,
  key?: 'medium' | 'small' | 'project-small',
) {
  return `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${id}${
    key ? `?key=${key}` : ''
  }`;
}
