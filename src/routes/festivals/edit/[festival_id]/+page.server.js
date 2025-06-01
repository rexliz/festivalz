import db from "$lib/db.js";
import fs from "fs";
import path from "path";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  return {
    festival: await db.getFestival(params.festival_id),
  };
}

export const actions = {
  edit: async ({ request, params }) => {
    const formData = await request.formData();
    const updatedFestival = {
      name: formData.get("name"),
      date: formData.get("date"),
      location: formData.get("location"),
      description: formData.get("description"),
    };

    await db.updateFestival(params.festival_id, updatedFestival);

    throw redirect(303, `/festivals/${params.festival_id}`);
  },
};