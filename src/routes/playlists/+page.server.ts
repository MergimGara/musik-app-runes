import { connectDB } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const db = await connectDB();
  const playlists = await db.collection('playlists').find().toArray();

  return {
    playlists: playlists.map(p => ({
      ...p,
      _id: p._id.toString()
    }))
  };
};


