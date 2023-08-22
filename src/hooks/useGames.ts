import useData from "./useData.ts";
import {GameQuery} from "../ChakraLayout.tsx";

export interface Platform {
   id: number;
   name: string;
   slug: string;
}
interface Genre {
   id:number;
   name: string;
   slug: string;
}
export interface Game {
   id: number;
   name: string;
   genres: Genre[];
   background_image: string;
   metacritic: number;
   parent_platforms : { platform: Platform }[];
   rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
   useData<Game>('/games',
      {
         params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id ,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText
         },
      }, //선택한 것을 쿼리로 보냄
      [gameQuery]  // 랜더링을 위한 변화 전달
   );

export default useGames;