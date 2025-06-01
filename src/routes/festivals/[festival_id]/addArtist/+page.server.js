import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";


export async function load({ params }) {
  return {
    festival : await db.getFestival(params.festival_id),
    artists: await db.getArtists(),
  };
}

export const actions = {
  addArtist: async ({ request, params }) => {
    const formData = await request.formData();

    let lineUp = {
      artistId: formData.get("artist"),
      festivalId: formData.get("festivalId"),
      stage: formData.get("stage"),
      time: formData.get("time"),
    }

    await db.addArtistToFestival(lineUp);

    throw redirect(303, `/festivals/${formData.get("festivalId")}`);
  },
};
