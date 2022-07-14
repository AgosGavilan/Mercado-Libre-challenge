import React from "react";
import {Container, Stack, Box} from "@chakra-ui/react";

import DetailsScreen from "./screens/Details";
import { NavBar } from "../components/NavBar"

import mock from "../product/mock";
import imgcarousel from "../product/imgcarousel";
import Header from "../components/Header";


const App: React.FC = () => {
  return (
    <Stack backgroundColor="#ededed">
        <Box backgroundColor="primary.500" paddingY={2} boxShadow="base"> {/*es como un div*/}
          <Container maxWidth="container.xl">
            <NavBar />
          </Container>
        </Box>

          <Container alignSelf="center" maxWidth="container.xl">
            <Header />
            <DetailsScreen product={mock.product} infocarousel={imgcarousel.infocarousel}/>
          </Container>
    </Stack>
  );
};

export default App;
