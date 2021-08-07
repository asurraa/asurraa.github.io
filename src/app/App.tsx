import React from "react";
import "../styles/App.css";
import HomePage from "../pages/home.page";
import { ChakraProvider } from "@chakra-ui/react";
const App = () => {
  return (
    <div>
      <ChakraProvider>
        <HomePage />
      </ChakraProvider>
    </div>
  );
};

export default App;
