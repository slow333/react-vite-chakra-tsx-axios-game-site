import useGenres, {Genres} from "../../hooks/useGenres.ts";
import {List, ListItem, Image, HStack, Text, Spinner, Button, Heading} from "@chakra-ui/react";
import getCroppedImageUrl from "../../services/image-url.ts";

interface Props {
   onSelectGenre: (genre: Genres) => void;
   selectedGenre: Genres | null;
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {

   const {data, isLoading, error} = useGenres();
   if (error) return;
   if (isLoading) return <Spinner/>;

   return (
      <div>
         <Heading fontSize='2xl' paddingY={3}>Genre</Heading>
         <List>
            {data.map(genre =>
               <ListItem key={genre.id} paddingY={2}>
                  <HStack spacing={2}>
                     <Image src={getCroppedImageUrl(genre.image_background)}
                            boxSize='32px'
                            borderRadius={4}
                            objectFit='cover'
                     />
                     <Button fontSize={'lg'} whiteSpace={'normal'} textAlign='left'
                             variant='link' // type과 같음
                        // onClick={() => console.log(gn)}
                             onClick={() => onSelectGenre(genre)}
                             fontWeight={selectedGenre?.id === genre.id ? 'bold' : '100'}
                     >  {genre.name} </Button>
                  </HStack>
               </ListItem>
            )}
         </List>
      </div>

   );
};

export default GenreList;