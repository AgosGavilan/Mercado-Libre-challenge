import { Box, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";

import { ProductPicture } from "../product/types"
import s from "../styles/prodprom.module.css"

const productos: ProductPicture [] = [
    {
        url: "https://http2.mlstatic.com/D_Q_NP_2X_649746-MLA46415134138_062021-AB.webp",
        price: 24.855,
        title: "Peluche Oso Gigante Sentado Phi Phi Toys 1.90 Mts Parado"
    },
    {
        url: "https://http2.mlstatic.com/D_Q_NP_2X_737150-MLA42756987304_072020-AB.webp",
        price: 15.699,
        title: "Peluche Gigante Cienpies Didactico 1.5 Mts"
    },
    {
        url: "https://http2.mlstatic.com/D_Q_NP_2X_967305-MLA47451123121_092021-AB.webp",
        price: 4.799,
        title: "Peluche Stitch Y Angel Sobre Corazon 20 X 25 Cm Original"
    },
    {
        url: "https://http2.mlstatic.com/D_Q_NP_2X_779884-MLA49024850036_022022-AB.webp",
        price: 28.609,
        title: "Peluche Magico Las Pistas De Blue Con Sonido Y Movimiento"
    }
]

const ProdProm: React.FC = () => {
    return (
        <Stack border="1px solid" borderColor="blackAlpha.300" borderRadius="10px" padding="1rem">
            <Stack direction="row" alignItems="baseline" marginY="1.5rem" spacing={3}>
                <Text fontSize="18px" fontWeight={400}>Productos promocionados</Text>
                <Link fontSize="sm">Anunciá aquí</Link>
            </Stack>
            <Stack spacing={6} marginBottom="1.5rem !important">
                {productos.map(el => (
                    <Stack direction="row" spacing={5} alignItems="flex-end">
                        <Box height="82px" width="82px">
                            <img src={el.url} className={s.imagenes}/>
                        </Box>
                        <Box>
                            <Text fontSize="20px" fontWeight={400}>$ {el.price}</Text>
                            <Text fontSize="sm" fontWeight="bold" color="#00a650">Envío gratis</Text>
                            <Text fontSize="sm" lineHeight="1.3" color="blackAlpha.800">{el.title}</Text>
                        </Box>
                    </Stack>
                ))}
            </Stack>

        </Stack>
    )
}

export default ProdProm