import ReactDOM from 'react-dom/client'
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import {RouterProvider} from "react-router-dom";
import router from "./router.tsx";
import {StrictMode} from "react";
import theme from './theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <ChakraProvider theme={theme}>
         <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
         <RouterProvider router={router} />
      </ChakraProvider>
   </StrictMode>
)
