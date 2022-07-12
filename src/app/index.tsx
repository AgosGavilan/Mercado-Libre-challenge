import React from "react";
import {Container, Stack, Box} from "@chakra-ui/react";

import DetailsScreen from "../product/screens/Details";
import { NavBar } from "./screens/NavBar";

import mock from "../product/mock";
import Header from "./screens/Header";


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
            <DetailsScreen product={mock.product}/>
          </Container>
    </Stack>
  );
};

export default App;
