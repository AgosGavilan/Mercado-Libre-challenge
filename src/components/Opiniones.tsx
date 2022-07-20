import { Box, Icon, Progress, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BsStar } from "react-icons/bs"

import mock from "../product/mock";
import { Opiniones } from "../product/types"

let opiniones: Opiniones[] = [
    {
        estrellas: "5",
        value: 100,
        cantidadPersonas: 4,
        colorScheme: "#3483fa"
    },
    {
        estrellas: "4",
        value: 0,
        cantidadPersonas: 0,
        colorScheme: "rgba(0,0,0,.1)"
    },
    {
        estrellas: "3",
        value: 0,
        cantidadPersonas: 0,
        colorScheme: "rgba(0,0,0,.1)"
    },
    {
        estrellas: "2",
        value: 0,
        cantidadPersonas: 0,
        colorScheme: "rgba(0,0,0,.1)"
    },
    {
        estrellas: "1",
        value: 0,
        cantidadPersonas: 0,
        colorScheme: "rgba(0,0,0,.1)"
    },
]

const Opioniones: React.FC = () => {
    return (
        <Stack paddingY="25px" marginInline="auto" width="90%" paddingInline="0.5rem" position="relative">
            <Text paddingTop="1rem" paddingBottom="2rem" fontSize="24px" lineHeight="1">
                Opioniones sobre {mock.product.title}
            </Text>
            <Stack direction="row">
                <Stack width="55%"> {/* izquierda */}
                    <Text fontSize="64px" paddingLeft="5rem" fontWeight="thin" lineHeight="1.03">5.0</Text>
                    <Stack direction="row" fontSize="40px" spacing={-1} height="25px" paddingX="5px">
                        <Icon viewBox="0 0 16 16" color="#3483fa">
                            <path 
                            fill="#3483fa"
                            d="M 5.056 8 L 1.931 9.648 l 0.597 -3.49 L 0 3.684 l 3.494 -0.509 L 5.056 0 l 1.562 3.176 l 3.494 0.51 l -2.528 2.471 l 0.597 3.491 Z"
                            fillRule="evenodd"/>
                        </Icon>
                        <Icon viewBox="0 0 16 16" color="#3483fa">
                            <path 
                            fill="#3483fa"
                            d="M 5.056 8 L 1.931 9.648 l 0.597 -3.49 L 0 3.684 l 3.494 -0.509 L 5.056 0 l 1.562 3.176 l 3.494 0.51 l -2.528 2.471 l 0.597 3.491 Z"
                            fillRule="evenodd"/>
                        </Icon>
                        <Icon viewBox="0 0 16 16" color="#3483fa">
                            <path 
                            fill="#3483fa"
                            d="M 5.056 8 L 1.931 9.648 l 0.597 -3.49 L 0 3.684 l 3.494 -0.509 L 5.056 0 l 1.562 3.176 l 3.494 0.51 l -2.528 2.471 l 0.597 3.491 Z"
                            fillRule="evenodd"/>
                        </Icon>
                        <Icon viewBox="0 0 16 16" color="#3483fa">
                            <path 
                            fill="#3483fa"
                            d="M 5.056 8 L 1.931 9.648 l 0.597 -3.49 L 0 3.684 l 3.494 -0.509 L 5.056 0 l 1.562 3.176 l 3.494 0.51 l -2.528 2.471 l 0.597 3.491 Z"
                            fillRule="evenodd"/>
                        </Icon>
                        <Icon viewBox="0 0 16 16" color="#3483fa">
                            <path 
                            fill="#3483fa"
                            d="M 5.056 8 L 1.931 9.648 l 0.597 -3.49 L 0 3.684 l 3.494 -0.509 L 5.056 0 l 1.562 3.176 l 3.494 0.51 l -2.528 2.471 l 0.597 3.491 Z"
                            fillRule="evenodd"/>
                        </Icon>
                    </Stack>
                    <Text fontSize="14px" color="blackAlpha.700">Promedio entre 4 opiniones</Text>
                </Stack>
                <Stack width="100%" spacing={1} marginLeft="2.5rem"> {/* derecha */}
                    {opiniones?.map(el => (
                        <Stack direction="row" alignItems="center">
                            <Text color="blackAlpha.600" width="20%">{el.estrellas} estrellas</Text>
                            <Progress 
                            value={el.value} 
                            size='xs' 
                            width="45%" 
                            borderRadius="2px" 
                            marginTop="5px"
                            />
                            <Text color="blackAlpha.600" paddingLeft="12px">{el.cantidadPersonas}</Text>
                        </Stack>
                    ))}
                </Stack>
            </Stack>

        </Stack>
    )
}

export default Opioniones