import React from "react";
import {Container, Stack, Box, Image, Text, Input, Icon, StackDivider} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai"
import {FiPrinter} from "react-icons/fi"

import logo from "../assets/logo.png"

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Stack>
        <Box backgroundColor="primary.500" paddingY={2} boxShadow="sm"> {/*es como un div*/}
          <Container maxWidth="container.xl" paddingX={0}>
            <Stack>
              <Stack direction="row" justifyContent="space-between">
                <Stack direction="row" spacing={14} flex={1}>
                  <Image objectFit="contain" src={logo}/> {/*logo de ML */}
                  <Stack /*Navbar*/
                  alignItems="center"
                  boxShadow="sm"
                  borderRadius="sm"
                  padding={2}
                  backgroundColor="white"
                  direction="row" 
                  divider={<StackDivider />} 
                  maxWidth={600}
                  width="100%"
                  >
                    <Input variant="unstyled" paddingX={2}/>
                    <Icon as={AiOutlineSearch} width={5} height={5} color="gray.400"></Icon> {/*lupita de la Navbar */}
                  </Stack>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <Image objectFit="contain" src="https://http2.mlstatic.com/D_NQ_840611-MLA48934732318_012022-OO.webp" height={39}/>
                </Stack>
              </Stack>
              <Stack direction="row">
                <Text>Enviar a Formosa</Text>
              </Stack>
            </Stack>
          </Container>
        </Box>

        <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
          <Routes />
        </Container>
    </Stack>
  );
};

export default App;
