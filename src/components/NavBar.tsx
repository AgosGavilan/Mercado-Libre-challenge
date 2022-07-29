import React from "react";
import {
  Stack,
  Image,
  Text,
  Input,
  Icon,
  StackDivider,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi"
import { IoLocationOutline, IoCartOutline } from "react-icons/io5";

const items: string[] = [
  "Vehículos",
  "Inmuebles",
  "Supermercado",
  "Tecnología",
  "Hogar y muebles",
  "Electrodomésticos",
  "Herramientas",
  "Construcción",
  "Desportes y fitnes",
  "Accesorios para vehículos",
  "Moda",
  "Juegos y jueguetes",
  "Bebés",
  "Beleza y cuidado personal",
  "Salud y equipamento médico",
  "Industrias y oficinas",
  "Agro",
  "Productos sustentables",
  "Servicios",
  "Mas vendidos",
  "Tiendas oficiales",
  "Ver más categorías"
]

export const NavBar: React.FC = () => {
  return (
    <Stack spacing={3}>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" spacing={14} flex={1}>
          <Image objectFit="contain" src={"https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.1/mercadolibre/logo__large_plus.png"}/>
          <Stack
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
            <Input variant="unstyled" paddingX={2} placeholder="Busca productos, marcas y más..." _placeholder={{color: "blackAlpha.400", fontFamily: "body"}}/>
            <Icon as={AiOutlineSearch} width={5} height={5} color="gray.400" cursor="pointer"></Icon>{/*lupita de la Navbar */}
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Image objectFit="contain" src="https://http2.mlstatic.com/D_NQ_840611-MLA48934732318_012022-OO.webp" height={39}/>
        </Stack>
      </Stack>
      
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
      >
        <Stack direction="row" alignItems="baseline" spacing={20}>
          <Stack direction="row" spacing={0} alignItems="center">
            <Icon
              as={IoLocationOutline}
              width={6}
              height={6}
              alignSelf="normal"
            />
            <Stack spacing={-1}>
              <Text color="blackAlpha.600" fontSize="xs" lineHeight="normal" fontFamily="body">
                Enviar a
              </Text>
              <Text lineHeight="normal" fontSize="sm" fontFamily="body">
                Formosa 3600
              </Text>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            fontSize="sm"
            color="blackAlpha.600"
            spacing={4}
          >
            <Menu>
              <MenuButton _hover={{color: "blackAlpha.800"}}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Text fontFamily="body">Categorías</Text>
                  <BiChevronDown/>
                </Stack>
              </MenuButton>
              <MenuList background="#333" color="white" paddingY="1.5rem" border="none">
                {items && items.map(el => (
                  <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em" paddingRight="4rem" _focus={{bg: "#3483fa"}}>{el}</MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Text cursor="pointer" _hover={{color: "blackAlpha.800"}} fontFamily="body">Ofertas</Text>
            <Text cursor="pointer" _hover={{color: "blackAlpha.800"}} fontFamily="body">Historial</Text>
            <Text cursor="pointer" _hover={{color: "blackAlpha.800"}} fontFamily="body">Supermercado</Text>
            <Text cursor="pointer" _hover={{color: "blackAlpha.800"}} fontFamily="body">Moda</Text>
            <Text cursor="pointer" _hover={{color: "blackAlpha.800"}} fontFamily="body">Vender</Text>
            <Text cursor="pointer" _hover={{color: "blackAlpha.800"}} fontFamily="body">Ayuda</Text>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={5} fontSize="sm" alignItems="center">
          <Text cursor="pointer" fontFamily="body">Creá tu cuenta</Text>
          <Text cursor="pointer" fontFamily="body">Ingresá</Text>
          <Text cursor="pointer" fontFamily="body">Mis compras</Text>
          <Icon as={IoCartOutline} height={6} width={6} cursor="pointer"></Icon>
        </Stack>
      </Stack>
    </Stack>
  );
};
