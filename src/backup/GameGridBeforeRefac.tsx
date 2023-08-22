// import {SimpleGrid, Text} from "@chakra-ui/react";
// import useGames, {Game} from "../hooks/useGames.ts";
// import GameCard from "../components/main-card/GameCard.tsx";
// import GameCardSkeleton from "../components/main-card/GameCardSkeleton.tsx";
// import GameCardContainer from "../components/main-card/GameCardContainer.tsx";
// import {Genres} from "../hooks/useGenres.ts";
// import {Platforms} from "../hooks/usePlatform.ts";
//
// interface Props {
//    selectedGenre: Genres | null;
//    selectedPlatform: Platforms | null;
// }
//
// const GameGridBeforeRefac = ({selectedGenre, selectedPlatform} : Props) => {
//
//    const { data, error, isLoading } = useGames(selectedGenre,selectedPlatform );
//    const skeletons = [1, 2, 3, 4, 5, 6];
//    return (
//       <div>
//          {error && <Text>{error}</Text>}
//          <SimpleGrid
//             columns={{sm: 1, md: 2, lg: 3, xl: 4}}
//             spacing={2}
//             padding={4} >
//             {isLoading && skeletons.map(sk =>
//                <GameCardContainer key={sk}>
//                   <GameCardSkeleton/>
//                </GameCardContainer>
//             )}
//             {data.map(game =>
//                <GameCardContainer key={game.id}>
//                   <GameCard
//                      game={ game } />
//                </GameCardContainer>
//             )}
//          </SimpleGrid>
//       </div>
//    );
// };
//
// export default GameGridBeforeRefac;