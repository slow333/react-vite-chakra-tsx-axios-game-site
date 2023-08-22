import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import {useRef} from "react";
import {useForm} from "react-hook-form";

interface Props{
   onSearch: (searchText: string) => void
}

const SearchInput = ({onSearch} : Props) => {

   // const ref = useRef<HTMLInputElement>(null);

   const {register, handleSubmit} = useForm();

   const onsubmit = (data) => {
      if(data) onSearch(data.searchText)
      console.log(data.searchText)
      // console.log(e)
   }

   return (
      <form onSubmit={handleSubmit(onsubmit)}>
         <InputGroup>
            <InputLeftElement children={<BsSearch/>}/>
            <Input
               // ref={ref}
               borderRadius={20}
               placeholder='Search games ??'
               variant='outline' size='md'
               {...register('searchText')}
            />
         </InputGroup>
      </form>

   );
};

export default SearchInput;