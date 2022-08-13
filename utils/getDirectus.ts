import { Directus } from '@directus/sdk';
import type DirectusCollections from '../models';

export default function getDirectus() {
  return new Directus<DirectusCollections>(
    process.env.NEXT_PUBLIC_DIRECTUS_URL ?? '',
  );
}
