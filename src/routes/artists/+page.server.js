import db from "$lib/db.js";

export async function load() {
  return {
    artists: await db.getArtists()
  }
}