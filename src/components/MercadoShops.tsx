import { Box, Link, Stack, StackDivider, Text } from "@chakra-ui/react";
import React from "react";

import img from "../assets/mercadoshops.png"
import { ProductPicture } from "../product/types";
import s from "../styles/ms.module.css"

const MS: ProductPicture[] = [
    {
        store: "TEDDYPLANET21",
        title: "Peluche Almohada Soft Animales Acostados 46cm Largo",
        price: 3.099,
        url: "https://http2.mlstatic.com/D_Q_NP_653616-MLA46288544219_062021-AB.webp"
    },
    {
        store: "ACHUBAE JUGUETERIA",
        title: "Animales Tiernos Suaves De Peluche Smoochy Pals 35x24",
        price: 3.045,
        url: "https://http2.mlstatic.com/D_Q_NP_902726-MLA49423393723_032022-AB.webp"
    },
    {
        store: "cinemashop",
        title: "Peluche Squishmallows 25 Cm - Star Wars - The Child",
        price: 9.205,
        url: "https://http2.mlstatic.com/D_Q_NP_899443-MLA49937599694_052022-AB.webp"
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
            <Stack backgroundColor="#e82e8a" borderRadius="5px 5px 0 0" padding="1rem">
                <Box display="flex" justifyContent="center">
                    <img src={img} height="37%" width="37%"/>
                </Box>
                <Text color="white" fontWeight="bold" marginTop="0px !important" marginBottom="14px !important">Comprá en tiendas fuera de Mercado Libre</Text>
            </Stack>
            <Stack background="#f5f5f5" marginTop="0px !important" borderRadius="0 0 5px 5px">
                <Box display="flex" flexWrap="wrap" className={s.container} >
                    {MS?.map(el => (
                        <Stack height="282px" width="160px" border="1px solid" borderRadius="8px" borderColor="#f5f5f5" backgroundColor="#fff !important">
                            <Box backgroundColor="#ededed" borderRadius="6px 6px 0 0">
                                <Text fontSize="10px" fontWeight={700} textAlign="center" padding="12px">{el.store?.toUpperCase()}</Text>
                            </Box>
                            <Box maxHeight="115px" maxWidth="115px" padding="0 8px" alignSelf="center" backgroundColor="#fff">
                                <img src={el.url} width="100%" height="100%"/>
                            </Box>
                            <Stack padding="12px" borderTop="1px solid" borderTopColor="#f5f5f5" backgroundColor="#fff !important">
                                <Box>
                                    <Text fontSize="xs" className={s.title}>{el.title}</Text>
                                </Box>
                                <Box marginY="3px !important">
                                    <Text fontSize="sm" fontWeight="bold">$ {el.price}</Text>
                                </Box>
                                {el.price! > 4.000 ? 
                                <Text fontSize="10px" fontWeight={400} color="#00a650" marginTop="0px !important">Envío gratis</Text>
                                : ""}
                            </Stack>
                        </Stack>
                    ))}
                    <Stack direction="row" divider={<StackDivider borderColor="blackAlpha.300"/>} margin="2px">
                        <Link fontSize="xs">Anunciá aquí</Link>
                        <Link fontSize="xs">Creá tu Mercado Shop</Link>
                    </Stack>
                </Box>
            </Stack>
        </Stack>
    )
}

export default MercadoShops