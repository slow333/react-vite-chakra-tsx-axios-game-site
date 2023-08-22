import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";

interface Props {
   onSelectSortOrder: (sortOrder: string) => void;
   sortOrder: string;
}

const SortSelector = ({onSelectSortOrder, sortOrder}: Props) => {
   const sortOrders = [
      {value: '', label: 'Relevance'},
      {value: '-added', label: 'Date added'},
      {value: 'name', label: 'Name'},
      {value: '-release', label: 'Release date'},
      {value: '-updated', label: 'Update date'},
      {value: '-metacritic', label: 'Popularity'},
      {value: '-rating', label: 'Average rating'},
   ]

   const sortedValue = sortOrders.find(order => order.value === sortOrder)

   return (
      <div>
         <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
               Order by: {sortedValue?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
               {sortOrders.map(order =>
                  <MenuItem key={order.value}
                            value={order.value}
                            onClick={() => onSelectSortOrder(order.value)}
                  >
                     {order.label}</MenuItem>
               )}
            </MenuList>
         </Menu>
      </div>
   );
};

export default SortSelector;
// Available fields: name, released, added, created, updated, rating, metacritic.
// You can reverse the sort order adding a hyphen, for example: -released.