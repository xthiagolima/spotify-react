import { artistArray } from "../database/artists.js";
import { songsArray } from "../database/songs.js";
import { db } from "./connect.js";

async function insertMany() {
  const newArtists = artistArray.map((artist) => {
    return {
      image: artist.image,
      name: artist.name,
      banner: artist.banner,
    };
  });

  const newSongs = songsArray.map((song) => {
    return {
      image: song.image,
      name: song.name,
      duration: song.duration,
      artist: song.artist,
      audio: song.audio,
    };
  });

  console.log("Inserting...");

  const responseSongs = await db.collection("songs").insertMany(newSongs);
  const responseArtists = await db.collection("artists").insertMany(newArtists);

  // console.log(responseArtists);
  // console.log(responseSongs);
  console.log("Insertion completed.");
  console.log("Artists inserted:", responseArtists.insertedCount);
  console.log("Songs inserted:", responseSongs.insertedCount);

  return { artists: responseArtists, songs: responseSongs };
}

export { insertMany };
