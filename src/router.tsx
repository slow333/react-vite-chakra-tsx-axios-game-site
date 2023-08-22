import {createBrowserRouter} from "react-router-dom";
import Home from "./Home.tsx";
import ChakraLayout from "./ChakraLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/chakra",
    element: <ChakraLayout/>,
  },
]);

export default router