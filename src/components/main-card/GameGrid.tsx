import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames, {Game} from "../../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import {GameQuery} from "../../ChakraLayout.tsx";

interface Props {
   gameQuery: GameQuery;
   /*   selectedGenre: Genres | null;
      selectedPlatform: Platforms | null;*/
}

const GameGrid = ({gameQuery}: Props) => {

   const {data, error, isLoading} = useGames(gameQuery);
   const skeletons = [1, 2, 3, 4, 5, 6];

   if (error) return <Text>{error}</Text>

   return (
      <SimpleGrid
         columns={{sm: 1, md: 2, lg: 3, xl: 4}}
         spacing={6}
         padding={4}>
         {isLoading && skeletons.map(sk =>
            <GameCardContainer key={sk}>
               <GameCardSkeleton/>
            </GameCardContainer>
         )}
         {data.map(game =>
            <GameCardContainer key={game.id}>
               <GameCard
                  game={game}/>
            </GameCardContainer>
         )}
      </SimpleGrid>
   );
};

export default GameGrid;