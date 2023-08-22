import {Button, Menu, MenuButton, MenuItem, MenuList, Select} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatform, {Platforms} from "../../hooks/usePlatform.ts";

interface Props {
   onSelectPlatform: (platform: Platforms) => void
   selectedPlatform: Platforms | null;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform} : Props) => {
   const {data, error} = usePlatform();
   if (error) return ;

   return (
      <Menu>
         <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
            {selectedPlatform?.name || 'Platforms'}
         </MenuButton>
         <MenuList>
            {data.map(platform =>
               <MenuItem key={platform.id}
                         onClick={() => onSelectPlatform(platform)}
               >
                  {platform.name}</MenuItem>)}
         </MenuList>
      </Menu>
   )
}

export default PlatformSelector;