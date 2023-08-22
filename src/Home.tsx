import {Heading, Link, List, ListIcon, ListItem, Stack, Text} from "@chakra-ui/react";
import {AiFillCheckCircle} from 'react-icons/ai'

const Home = () => {
   return (
      <Stack spacing={3} margin={3}>
         <Link href='/chakra' >
            <Heading size='md' fontStyle='italic'>Api 연동해서 CRUD 하는 것 복잡한 것 </Heading>
         </Link>
         <List>
            <ListItem>
               <ListIcon as={AiFillCheckCircle} color={'green.600'} />
               게임 소개하는 내용</ListItem>
            <ListItem>
               <ListIcon as={AiFillCheckCircle} color={'green.600'} />
               rawg.io 👉 가입해서 key를 받아옮</ListItem>
            <ListItem>
               <ListIcon as={AiFillCheckCircle} color={'green.600'} />
               api로 이동해서 키 값을 복사해서 services 👉 api-client.ts 에 복사
            </ListItem>
            <ListItem><ListIcon as={AiFillCheckCircle} color={'green.600'} />
               {`documentation > read doc > 많은 API 가 있음 > game > get a list of games`}
            </ListItem>
            <ListItem><ListIcon as={AiFillCheckCircle} color={'green.600'} />
               chakra ui layout 사용
            </ListItem>
         </List>
         <Heading size={'md'}>Chakra</Heading>
         <Text>chakra ui 사용 : chakra-ui.com</Text>
         <Text>index.tsx import 해서 {`<ChakraProvider> <App /> </ChakraProvider>`} 적용(js 안됨)</Text>
         <Text>layout 구성이 편리함 직관적임, 기타 설정도 직관적임</Text>
      </Stack>
   );
};

export default Home;