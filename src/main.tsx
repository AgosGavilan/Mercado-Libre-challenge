import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";

import App from "./app";
import theme from "./theme";

ReactDOM.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <BrowserRouter>
      <ChakraProvider theme={theme}> {/*Wrap your application with the ChakraProvider provided by @chakra-ui/react*/}
        <App/>
      </ChakraProvider>
    </BrowserRouter>
  </>,
  document.getElementById("root"),
);
