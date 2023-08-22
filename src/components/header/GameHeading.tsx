import {Heading} from "@chakra-ui/react";
import {GameQuery} from "../../ChakraLayout.tsx";

interface Props {
   gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {

   const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;

   return (
      <Heading as={'h1'} marginX={3} marginY={4}>{heading}</Heading>
   );
};

export default GameHeading;