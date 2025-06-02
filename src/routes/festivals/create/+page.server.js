import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();

    let festival = {
      name: data.get("name"),
      location: data.get("location"),
      date: data.get("date"),
      description: data.get("description"),
      poster: '/images/festivals/default.png',
    };
    
    const response = await db.createFestival(festival);

    if (response) {
      console.log("Festival created successfully!");
      redirect(303, "/festivals");
    } else {
      return { success: false };
    }
  },
};
