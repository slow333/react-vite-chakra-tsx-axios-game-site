import {Image, ImageProps} from "@chakra-ui/react";
import meh from '../../assets/meh.jpg'
import good from '../../assets/thumsup.jpg'
import excellent from '../../assets/bullsEye.jpg'

interface Props {
   rating: number;
}
const Emoji = ({rating}: Props) => {
   if(rating < 3) return '';
   const emojiMap: {[key:number]: ImageProps} = {
      3: {src: meh, alt: 'not bad', boxSize :'22px'},
      4: {src: good, alt: 'good', boxSize :'22px'},
      5: {src: excellent, alt: 'excellent', boxSize :'29px'},
   }

   return (
      <Image {...emojiMap[rating]} marginTop={3}/>
   );
};

export default Emoji;