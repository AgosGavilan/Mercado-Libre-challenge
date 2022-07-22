import { Box, Icon, Link, Stack, StackDivider, Text } from "@chakra-ui/react";
import React from "react";
import { BsHeart } from "react-icons/bs"
import { AiFillStar } from "react-icons/ai";

import mock from "../product/mock";

const Informacion: React.FC = () => {
    const {sold_quantity, title, price, currency_id, condition} = mock.product


    return (
        <Stack border="1px solid" borderColor="blackAlpha.200" borderRadius="10px" padding="1rem">
            <Stack 
            divider={<StackDivider height={3} borderColor="blackAlpha.300" alignSelf="center"/>} 
            direction="row"
            color="blackAlpha.600">
                <Text fontSize="sm">Nuevo</Text>
                <Text fontSize="sm">{sold_quantity} vendidos</Text>
            </Stack>
            <Stack direction="row" spacing={-1}>
                <Text fontSize="21px" fontWeight="bold" lineHeight="1.08">{title}!!!</Text>
                <Icon as={BsHeart} color="#3483fa" fontSize="27" cursor="pointer"/>
            </Stack>
            <Stack direction="row">
                <Stack direction="row" fontSize="16px" spacing={0.5} alignItems="center">
                    <AiFillStar color="#3483fa" />
                    <AiFillStar color="#3483fa" />
                    <AiFillStar color="#3483fa" />
                    <AiFillStar color="#3483fa" />
                    <AiFillStar color="#3483fa" />
                </Stack>
                <Text fontSize="14px" color="#3483fa" alignSelf="center" marginLeft="1em" minWidth="100px">(4)</Text>
            </Stack>
            <Stack marginTop="1rem !important">
                <Text fontSize="36px" fontWeight="thin" lineHeight="1.03">$ {price}</Text>
                <Text marginTop="4px !important">en 12x $1.166,60</Text>
                <Link fontSize="sm" marginTop="3px !important" color="#3483fa">Ver los medios de pago</Link>
            </Stack>
            <Stack>
                <Box>

                </Box>
                <Box></Box>
            </Stack>
        </Stack>
    )
}

export default Informacion