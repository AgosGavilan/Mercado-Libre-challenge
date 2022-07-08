import React from "react";
import {Container, Stack, Box, Image, Text, Input, Icon, StackDivider} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";
import {IoLocationOutline, IoCartOutline} from "react-icons/io5"

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Stack>
        <Box backgroundColor="primary.500" paddingY={2} boxShadow="base"> {/*es como un div*/}
          <Container maxWidth="container.xl">
            <Stack spacing={3}>
              <Stack direction="row" justifyContent="space-between">
                <Stack direction="row" spacing={14} flex={1}>
                  <Image objectFit="contain" src={"https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.1/mercadolibre/logo__large_plus.png"}/> {/*logo de ML */}
                  <Stack /*Navbar*/
                  alignItems="center"
                  boxShadow="base"
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
              <Stack direction="row" justifyContent="space-between" alignItems="baseline">
                <Stack direction="row" alignItems="baseline" spacing={20}>
                  <Stack direction="row" spacing={0} alignItems="center">
                    <Icon as={IoLocationOutline} width={6} height={6} alignSelf="normal" />
                    <Stack spacing={-1}>
                      <Text color="blackAlpha.600" fontSize="xs" lineHeight="normal">Enviar a</Text>
                      <Text lineHeight="normal" fontSize="sm">Formosa 3600</Text>
                    </Stack>
                  </Stack>
                  <Stack direction="row" fontSize="sm" color="blackAlpha.600" spacing={4}>
                    <Text>Categorias</Text>
                    <Text>Ofertas</Text>
                    <Text>Historial</Text>
                    <Text>Supermercado</Text>
                    <Text>Moda</Text>
                    <Text>Vender</Text>
                    <Text>Ayuda</Text>
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={5} fontSize="sm" alignItems="center">
                  <Text>Creá tu cuenta</Text>
                  <Text>Ingresá</Text>
                  <Text>Mis compras</Text>
                  <Icon as={IoCartOutline} height={6} width={6}></Icon>
                </Stack>
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
