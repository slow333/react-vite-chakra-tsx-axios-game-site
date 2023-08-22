import {HStack, Image, Link} from "@chakra-ui/react";
import logo from '../../assets/react.svg';
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import SearchInput from "./SearchInput.tsx";
interface Props{
   onSearch: (searchText: string) => void
}
const NavBar = ({onSearch} : Props) => {
   return (
      <div>
         <HStack  padding='10px'> {/*수평 스텍*/}
            <Link href='/'><Image src={logo} boxSize={'50px'} padding={2}/></Link>
            <SearchInput onSearch={onSearch}/>
            <ColorModeSwitch/>
         </HStack>
      </div>
   );
};

export default NavBar;