import { connectDB } from '$lib/db';
import type { PageServerLoad } from './$types';
import { ObjectId } from 'mongodb';
import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions: Actions = {
  delete: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get('id')?.toString();

    if (!id) return;

    const db = await connectDB();
    await db.collection('favorites').deleteOne({ _id: new ObjectId(id) });

    throw redirect(303, '/favorites');
  }
};

export const load: PageServerLoad = async () => {
	const db = await connectDB();
	const favorites = await db.collection('favorites').find().toArray();

	return {
		favorites: favorites.map((f) => ({
			...f,
			_id: f._id.toString()
		}))
	};
};
