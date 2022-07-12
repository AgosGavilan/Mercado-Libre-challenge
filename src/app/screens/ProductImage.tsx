import React from "react";
import { Stack, Box, Image } from "@chakra-ui/react";

import { Props } from "../../product/screens/Details";
import s from "../../styles/productImage.module.css"

const ProductImage: React.FC<Props> = ({product}) => {
  return (
    <Stack direction="row">
      <Stack direction="column" spacing={2}>
        {product.pictures?.map((el) => (
          <Box
            border="1px"
            borderRadius="4px"
            borderColor="blackAlpha.400"
            height="48px"
            width="48px"
            padding="2px"
            cursor="pointer"
          >
            <Image
              src={el.url}
              height="100%"
              width="100%"
              objectFit="contain"
            />
          </Box>
        ))}
      </Stack>
      <Stack>
        <figure className={s.big_img}>
          <Image
            src={product.pictures[0].url}
            cursor="zoom-in"
            height="auto"
            objectFit="contain"
            margin="auto"
          />
        </figure>
      </Stack>
    </Stack>
  );
};

export default ProductImage
