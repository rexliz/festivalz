import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  return {
    festival: await db.getFestival(params.festival_id),
    artists: await db.getArtistsByFestival(params.festival_id),
  };
}

export const actions = {
  delete: async ({ params }) => {
    const response = await db.deleteFestival(params.festival_id);
    if (response) {
      redirect(303, "/festivals");
    } else {
      return { success: false };
    }
  },
};
