import React, { useState } from "react";
import { Stack, Box, Image } from "@chakra-ui/react";

import { Props } from "../app/screens/Details";
import s from "../styles/productImage.module.css"

const ProductImage: React.FC<Props> = ({product}) => {

  const imgDef = product.pictures[0].url
  const [bigImg, setBigImg] = useState<string>(imgDef)

  const handleSelect = (i:string) => {
    let buscado = product.pictures.find(el => el.id === i)
    //console.log(buscado)
    let a = buscado?.url
    //console.log(a)
    setBigImg(a!)

  }

  
  return (
    <Stack direction="row" marginBottom="2rem !important">
      <Stack direction="column" spacing={2}>
        {product.pictures?.map((el) => (
          <Box
            key={el.id}
            border="1px"
            borderRadius="4px"
            borderColor="blackAlpha.400"
            height="50px"
            width="50px"
            padding="2px"
            cursor="pointer"
            _hover={{
              border: "2px solid #3483fa;"
            }}
          >
            <Image
              src={el.url}
              height="100%"
              width="100%"
              objectFit="contain"
              onClick={()=> handleSelect(el.id!)}
            />
          </Box>
        ))}
      </Stack>
      <Stack>
        <figure className={s.big_img}>
          <Image
            src={bigImg}
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
