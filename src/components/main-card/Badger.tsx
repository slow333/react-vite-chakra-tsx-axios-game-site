import {Game} from "../../hooks/useGames.ts";
import {Badge} from '@chakra-ui/react';

interface Props {
   score: number;
}

const Badger = ({score} : Props) => {
   const textColor = score > 90 ? 'yellow' : score > 80 ? 'white' : 'green';
   return (
      <div>
         <Badge bg={'gray'} paddingX='8px' borderRadius='4px' colorScheme={textColor}>{score}</Badge>
      </div>
   );
};

export default Badger;