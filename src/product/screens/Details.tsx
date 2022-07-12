import { Link, Stack, Text, StackDivider, Icon, Box, Image, Button } from "@chakra-ui/react";
import React from "react";

import { VscChevronRight } from "react-icons/vsc"

import {Product} from "../types";
import ProductImage from "../../app/screens/ProductImage";
import s from "../../styles/productImage.module.css"

export interface Props {
  product: Product; //product es un objeto
}

const DetailsScreen: React.FC<Props> = ({product}) => {

  return (
    <Stack>
      <Stack backgroundColor="white" borderRadius="4px" boxShadow="base">
        <Stack margin="16px" divider={<StackDivider borderColor="blackAlpha.300"/>}> {/*izquierda*/}
          {/*imagen */}
          <ProductImage product={product}/>
          {/*Carrousel*/}
          <Stack>
            <Text>Publicaciones del vendedor</Text>
            <Stack></Stack>
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
