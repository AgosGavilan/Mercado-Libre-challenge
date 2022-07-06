import React from "react";
import {Container, Stack, Box, Image} from "@chakra-ui/react";

import logo from "../assets/logo.png"

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Stack>
        <Box backgroundColor="primary.500" paddingY={4} boxShadow="sm">
          <Container maxWidth="container.xl" paddingX={0}>
            <Stack>
              <Stack direction="row">
                <Image src={logo}/>
              </Stack>
            </Stack>
            {`< Navbar />`}
          </Container>
        </Box>
        <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
          <Routes />
        </Container>
    </Stack>
  );
};

export default App;
