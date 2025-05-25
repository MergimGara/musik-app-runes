import { connectDB } from '$lib/db';
import { ObjectId } from 'mongodb';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const db = await connectDB();

  const playlist = await db.collection('playlists').findOne({ _id: new ObjectId(params.id) });
  if (!playlist) throw new Error('Playlist nicht gefunden');

  const songIds = (playlist.songs as string[] || []).map((id) => new ObjectId(id));
  const songs = await db.collection('songs').find({ _id: { $in: songIds } }).toArray();

  const allSongs = await db.collection('songs').find().toArray();

  return {
    playlist: {
      ...playlist,
      _id: playlist._id.toString()
    },
    songs: songs.map((s) => ({
      ...s,
      _id: s._id.toString()
    })),
    allSongs: allSongs.map((s) => ({
      ...s,
      _id: s._id.toString()
    }))
  };
};

export const actions: Actions = {
  addSong: async ({ request, params }) => {
    const formData = await request.formData();
    const songId = formData.get('songId');

    if (!songId || typeof songId !== 'string') return;

    const db = await connectDB();

    await db.collection('playlists').updateOne(
      { _id: new ObjectId(params.id) },
      { $addToSet: { songs: songId } }
    );
  },

  removeSong: async ({ request, params }) => {
    const formData = await request.formData();
    const songId = formData.get('songId');

    if (!songId || typeof songId !== 'string') return;

    const db = await connectDB();

await db.collection('playlists').updateOne(
  { _id: new ObjectId(params.id) },
  { $pull: { songs: songId.toString() } } as any
);
  }
};

  



