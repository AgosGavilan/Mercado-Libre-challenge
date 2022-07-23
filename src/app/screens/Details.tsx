import { Link, Stack, Text, StackDivider, Icon, Box, Image, Button, Container } from "@chakra-ui/react";
import React from "react";

import { VscChevronRight } from "react-icons/vsc"

import {Product} from "../../product/types";
import ProductImage from "../../components/ProductImage";
import Carrousel from "../../components/Carrousel";
import Tabla from "../../components/Tabla";
import Description from "../../components/Description";
import Opioniones from "../../components/Opiniones";
import Informacion from "../../components/Informacion";
import Vendedor from "../../components/Vendedor";

export interface Props {
  product: Product; //product es un objeto
  infocarousel: Product
}

const DetailsScreen: React.FC<Props> = ({product, infocarousel}) => {

  return (
      <Stack backgroundColor="white" borderRadius="4px" boxShadow="base" direction="row" >
        <Stack 
        marginLeft="16px" 
        marginTop="16px"
        marginBottom="16px"
        divider={<StackDivider borderColor="blackAlpha.300" marginInline="auto" marginLeft="3rem !important" width="90%" paddingInline="0.5rem" position="relative"/>} 
        maxWidth="770px"> {/*izquierda*/}
          <ProductImage product={product} infocarousel={infocarousel}/>
          {/*Carrousel*/}
          <Stack paddingY="25px" marginInline="auto" width="90%" paddingInline="0.5rem" position="relative">
            <Text fontSize="24px" marginBottom="0.7rem">Publicaciones del vendedor</Text>
            <Carrousel infocarousel={infocarousel} product={product}/>
            <Link marginTop="1.5rem !important" fontSize="sm" color="#1259c3">Ver más publicaciones del vendedor</Link>
          </Stack>
          <Tabla />
          <Description />
          <Opioniones />
        </Stack>

        <Stack 
        maxWidth="368px" 
        width="368px" 
        marginTop="16px !important" 
        paddingRight="16px !important"> {/*derecha*/}
          <Informacion />
          <Vendedor />
        </Stack>

    </Stack>
  );
};

export default DetailsScreen;
