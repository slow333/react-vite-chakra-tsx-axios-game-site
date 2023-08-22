import {Game, Platform} from "../../hooks/useGames.ts";
import {Card, CardBody, Heading, HStack, Image, Text} from "@chakra-ui/react";
import PlatFormIconList from "./PlatFormIconList.tsx";
import Badger from "./Badger.tsx";
import getCroppedImageUrl from "../../services/image-url.ts";
import Emoji from "./Emoji.tsx";

interface Props {
   game: Game;
}

const GameCard = ({game}: Props) => {

   return (
      <Card>
         <Image src={getCroppedImageUrl(game.background_image)}
                height={game.background_image ? '': '180px'}/>
         <CardBody>
            <HStack justifyContent='space-between' marginBottom={1}>
               <PlatFormIconList platforms={game.parent_platforms.map(plf => plf.platform)}/>
               <Badger score={game.metacritic}/>
            </HStack>
            <Heading fontSize={14}>{game.name}<Emoji rating={game.rating_top}/></Heading>
         </CardBody>
      </Card>
   );
};

export default GameCard;