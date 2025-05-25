import type { PageServerLoad, Actions } from './$types';
import { connectDB } from '$lib/db.js';
import { ObjectId } from 'mongodb';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
  const db = await connectDB();
  const songs = await db.collection('songs').find().toArray();

  return {
    songs: songs.map((s) => ({
      ...s,
      _id: s._id.toString()
    }))
  };
};

export const actions: Actions = {
  delete: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get('id');

    if (!id || typeof id !== 'string') {
      return { success: false };
    }

    const db = await connectDB();
    await db.collection('songs').deleteOne({ _id: new ObjectId(id) });

    throw redirect(303, '/songs?success=deleted');
  },

  favorite: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get('id')?.toString();

    if (!id) return;

    const db = await connectDB();
    const song = await db.collection('songs').findOne({ _id: new ObjectId(id) });
    if (!song) return;

    const alreadyExists = await db.collection('favorites').findOne({ _id: new ObjectId(id) });
    if (alreadyExists) return;

    await db.collection('favorites').insertOne(song);

    throw redirect(303, '/songs?success=favorite');
  }
};


