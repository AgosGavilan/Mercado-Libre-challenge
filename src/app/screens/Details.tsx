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
import MediosDePago from "../../components/MediosDePago";
import ProdProm from "../../components/ProdProm";
import MercadoShops from "../../components/MercadoShops";

export interface Props {
  product: Product; //product es un objeto
  infocarousel: Product
}

const DetailsScreen: React.FC<Props> = ({product, infocarousel}) => {

  return (
      <Stack backgroundColor="white" borderRadius="4px" boxShadow="base" direction="row" >
        {/*izquierda*/}
        <Stack 
        marginLeft="16px" 
        marginTop="16px"
        marginBottom="16px"
        divider={<StackDivider borderColor="blackAlpha.300" marginInline="auto" marginLeft="3rem !important" width="90%" paddingInline="0.5rem" position="relative"/>} 
        maxWidth="770px">
          <ProductImage product={product} infocarousel={infocarousel}/>
          <Carrousel infocarousel={infocarousel} product={product}/>
          <Tabla />
          <Description />
          <Opioniones />
        </Stack>

        {/*derecha*/}
        <Stack 
        maxWidth="368px" 
        width="368px" 
        marginTop="16px !important" 
        paddingRight="16px !important"
        spacing={5}
        >
          <Stack position="sticky" top="-35rem" marginBottom="3rem">
            <Informacion />
            <Vendedor />
            <MediosDePago />
            <ProdProm />
            <MercadoShops />
          </Stack>
        </Stack>

    </Stack>
  );
};

export default DetailsScreen;
