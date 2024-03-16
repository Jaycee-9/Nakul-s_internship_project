import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

//components
import Home from "./Components/Home";

export const route = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Home />} />)
);
