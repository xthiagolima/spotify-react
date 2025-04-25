import axios from "axios";

const URL = "http://localhost:3000";

const responseArtists = await axios.get(URL + "/artists");
const responseSongs = await axios.get(URL + "/songs");

console.log("Artists response:", responseArtists.data);
console.log("Songs response:", responseSongs.data);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
