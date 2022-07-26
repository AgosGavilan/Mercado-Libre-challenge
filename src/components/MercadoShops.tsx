import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

import img from "../assets/mercadoshops.png"
import { ProductPicture } from "../product/types";

const MS: ProductPicture[] = [
    {
        store: "TEDDYPLANET21",
        title: "Peluche Almohada Soft Animales Acostados 46cm Largo",
        price: 3.099,
        url: "https://http2.mlstatic.com/D_Q_NP_653616-MLA46288544219_062021-AB.webp"
    },
    {
        store: "TEDDYPLANET21",
        title: "Animales Acostados De Peluche Almohada Soft 55cm Largo",
        price: 4.899,
        url: "https://http2.mlstatic.com/D_Q_NP_630123-MLA50866165232_072022-AB.webp"
    },
    {
        store: "Esdivertido.com",
        title: "Peluche Almohada Soft Animales Acostados 46cm Largo",
        price: 3.099,
        url: "https://http2.mlstatic.com/D_Q_NP_653616-MLA46288544219_062021-AB.webp"
    },
    {
        store: "TEDDYPLANET21",
        title: "Peluche Olaf 25 Cm Interactivo Camina Repite Frozen",
        price: 7.239,
        url: "https://http2.mlstatic.com/D_Q_NP_996806-MLA46808632475_072021-AB.webp"
    },
]

const MercadoShops: React.FC = () => {
    return (
        <Stack borderRadius="10px">
            <Stack backgroundColor="#e82e8a" borderRadius="5px" padding="1rem">
                <Box display="flex" justifyContent="center">
                    <img src={img} height="37%" width="37%"/>
                </Box>
                <Text color="white" fontWeight="bold" marginTop="0px !important">Comprá en tiendas fuera de Mercado Libre</Text>
            </Stack>
            <Stack>
                {MS?.map(el => (
                    <Stack>
                        <Box>
                            <Text>{el.store}</Text>
                        </Box>
                        <Box>
                            <img src={el.url} />
                        </Box>
                        <Box>
                            <Text>{el.title}</Text>
                        </Box>
                        <Box>
                            <Text>{el.price}</Text>
                        </Box>
                        {el.price! > 4000 ? 
                        <Text>Envío gratis</Text>
                        : ""}
                    </Stack>
                ))}
            </Stack>

        </Stack>
    )
}

export default MercadoShops