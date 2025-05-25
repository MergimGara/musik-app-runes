import { connectDB } from '$lib/db.js';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ url }) => {
  const search = url.searchParams.get('q');
  if (!search) return { results: [] };

  const res = await fetch(
    `https://itunes.apple.com/search?term=${encodeURIComponent(search)}&media=music&limit=10`
  );

  const data = await res.json();

  return {
    results: data.results
  };
};

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const song = {
      titel: formData.get('titel'),
      künstler: formData.get('künstler'),
      cover_url: formData.get('cover_url'),
      audio_url: formData.get('audio_url'),
      erstellt_am: new Date().toISOString()
    };

    const db = await connectDB();
    await db.collection('songs').insertOne(song);

    return { success: true };
  }
};
