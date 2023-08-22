import {Platform} from "../../hooks/useGames.ts";
import {HStack, Icon} from "@chakra-ui/react";
import {FaWindows, FaPlaystation, FaXbox, FaLinux, FaAndroid, FaApple} from 'react-icons/fa'
import { MdPhoneIphone} from 'react-icons/md'
import { SiNintendo} from 'react-icons/si'
import { BsGlobe} from 'react-icons/bs'
import {IconType} from "react-icons";

interface Props {
   platforms: Platform[]
}

export const PlatFormIconList = ({platforms} : Props) => {
   const iconMap : { [key:string] : IconType } = {
       // slug: playstation
      pc: FaWindows,
      playstation: FaPlaystation,
      xbox: FaXbox,
      nintendo: SiNintendo,
      mac: FaApple,
      linux: FaLinux,
      ios: MdPhoneIphone,
      web: BsGlobe,
      android: FaAndroid
   }
   return (
      <HStack marginY={2}>
         {platforms.map((platform) =>
            <Icon key={platform.id} as={iconMap[platform.slug]} color={"gray.500"}/>)}
      </HStack>
   );
};

export default PlatFormIconList;