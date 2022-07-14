import { Link, Stack, Text, StackDivider, Icon, Box, Image, Button } from "@chakra-ui/react";
import React from "react";

import { VscChevronRight } from "react-icons/vsc"

import {Product} from "../../product/types";
import ProductImage from "../../components/ProductImage";
import Carrousel from "../../components/Carrousel";

export interface Props {
  product: Product; //product es un objeto
  infocarousel: Product
}

const DetailsScreen: React.FC<Props> = ({product, infocarousel}) => {

  return (
    <Stack>
      <Stack backgroundColor="white" borderRadius="4px" boxShadow="base">
        <Stack margin="16px" divider={<StackDivider borderColor="blackAlpha.300"/>}> {/*izquierda*/}
          {/*imagen */}
          <ProductImage product={product} infocarousel={infocarousel}/>
          {/*Carrousel*/}
          <Stack paddingTop="25px">
            <Text fontSize="24px" marginBottom="0.7rem">Publicaciones del vendedor</Text>
            <Carrousel infocarousel={infocarousel} product={product}/>
            <Link>ver mas publicaciones del vendedor</Link>
          </Stack>

        </Stack>

        <Stack> {/*derecha*/}

        </Stack>
      </Stack>

    </Stack>
  );
};

export default DetailsScreen;
