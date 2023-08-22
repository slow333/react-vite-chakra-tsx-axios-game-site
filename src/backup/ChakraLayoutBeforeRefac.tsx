// import {Grid, GridItem, HStack, Show} from "@chakra-ui/react";
// import NavBar from "../components/header/NavBar.tsx";
// import GameGrid from "../components/main-card/GameGrid.tsx";
// import GenreList from "../components/genre/GenreList.tsx";
// import {useState} from "react";
// import {Genres} from "../hooks/useGenres.ts";
// import {Platforms} from "../hooks/usePlatform.ts";
// import PlatformSelector from "../components/main-card/PlatformSelector.tsx";
// import SortSelector from "../components/main-card/SortSelector.tsx";
//
// export interface GameQuery {
//    genre: Genres | null;
//    platform: Platforms | null;
// }
//
// const ChakraLayoutBeforRefac = () => {
//    const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
//    const [selectedPlatform, setSelectedPlatform] = useState<Platforms | null>(null)
//
//    return (
//       <Grid
//          templateAreas={{
//             base: `"nav" "main"`,
//             //2개의 row를 구성, column : nav 2칸, 측면 1칸, main 1칸,
//             // => 화면이 md보다 크면 표시되는 구성 area에 이름을 적고 layout을 구성
//             md: `"nav nav" "측면 main"`
//          }}
//          templateColumns={{
//             base: '1fr',
//             md: '200px 1fr' //1컬럼 200으로 고정하고 나머지 컬럼 모두 차지
//          }}
//       >
//          <GridItem area='nav'>
//             <NavBar/>
//          </GridItem>
//          <Show above='md'> {/*md에서 부터 보임*/}
//             <GridItem area='측면' paddingX={4} marginBottom={6}>
//                <GenreList selectedGenre={selectedGenre}
//                           onSelectGenre={(genre) => setSelectedGenre(genre)}/>
//             </GridItem>
//          </Show>
//          <GridItem area='main' paddingLeft='22px' >
//             <HStack spacing={5} paddingX={3}>
//                <PlatformSelector
//                   selectedPlatform={selectedPlatform}
//                   onSelectPlatform={(platform) => setSelectedPlatform(platform)}
//                />
//             </HStack>
//             <Grid templateRows='repeat(3, 1fr)' gap={2}>
//                <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
//             </Grid>
//          </GridItem>
//       </Grid>
//    );
// };
//
// export default ChakraLayoutBeforRefac;