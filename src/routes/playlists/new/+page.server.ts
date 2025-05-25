import type { Actions } from './$types';
import { connectDB } from '$lib/db';

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name');
    const beschreibung = formData.get('beschreibung');

    if (!name || typeof name !== 'string') return { success: false };

    const db = await connectDB();
    await db.collection('playlists').insertOne({
      name,
      beschreibung,
      erstellt_am: new Date(), // ✅ laut ER-Modell
      songs: []
    });

    return { success: true };
  }
};
