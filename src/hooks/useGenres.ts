// import useData from "./useData.ts";
import genres from "../data/genres.ts";

export interface Genres {
   id: number;
   name: string;
   slug: string;
   image_background: string;
}

const UseGenres = () => ({ data: genres, isLoading: false, error: null });
// const UseGenres = () => useData<Genres>('/genres');

export default UseGenres;