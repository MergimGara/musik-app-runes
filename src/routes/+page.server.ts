import type { PageServerLoad } from './$types';
import { connectDB } from '$lib/db';

export const load: PageServerLoad = async () => {
  const db = await connectDB();

  const songs = await db.collection('songs').find().toArray();
  const favorites = await db.collection('favorites').find().toArray();

  const recentSongs = await db.collection('songs')
    .find()
    .sort({ _id: -1 }) // MongoDB-Objekte haben Zeitstempel im _id
    .limit(10)
    .toArray();

  return {
    songs: songs.map((s) => ({ ...s, _id: s._id.toString() })),
    favorites: favorites.map((f) => ({ ...f, _id: f._id.toString() })),
    recentSongs: recentSongs.map((r) => ({ ...r, _id: r._id.toString() }))
  };
};

