import { Image, Link, Stack, StackDivider, Text } from "@chakra-ui/react";
import React from "react";
import { GoLocation } from "react-icons/go"

const Vendedor: React.FC = () => {
    return (
        <Stack border="1px solid" borderColor="blackAlpha.300" borderRadius="10px" padding="1rem">
            <Text marginTop="1rem !important" fontSize="18px">Información sobre el vendedor</Text>
            <Stack spacing={6} marginTop="1.5rem !important">
                <Stack direction="row">
                    <GoLocation />
                    <Stack lineHeight="1.03">
                        <Text>Ubicación</Text>
                        <Text color="blackAlpha.600" fontSize="sm" marginTop="3px !important">Villa Pueyrredón, Capital Federal</Text>
                    </Stack>
                </Stack>
                <Stack direction="row">
                    <Image src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/medal.svg" height="20px" width="20px"/>
                    <Stack lineHeight="1.03">
                        <Text color="#00a650" fontWeight={400}>MercadoLíder Platinum</Text>
                        <Text color="blackAlpha.600" fontSize="sm" marginTop="3px !important">¡Es uno de los mejores del sitio!</Text>
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction="row" marginTop="1.5rem !important" alignItems="center">
                <Stack height="10px" width="20%" backgroundColor="#fff0f0"></Stack>
                <Stack height="10px" width="20%" backgroundColor="#fff5e8"></Stack>
                <Stack height="10px" width="20%" backgroundColor="#fffcda"></Stack>
                <Stack height="10px" width="20%" backgroundColor="#f1fdd7"></Stack>
                <Stack height="12px" width="20%" backgroundColor="#39b54a"></Stack>
            </Stack>
            <Stack direction="row" divider={<StackDivider borderColor="blackAlpha.300"/>} marginTop="1.5rem !important">
                <Stack alignItems="center" width="33.33%">
                    <Text fontSize="25px">1014</Text>
                    <Text fontSize="xs" color="blackAlpha.700" marginTop="0px !important" textAlign="center" lineHeight="1.03">Ventas en los últimos 60 dias</Text>
                </Stack>
                <Stack alignItems="center" width="33.33%">
                    <Image src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/message-positive.svg" height="30px" width="30px" />
                    <Text fontSize="xs" color="blackAlpha.700" textAlign="center" lineHeight="1.03">Brinda buena atención</Text>
                </Stack>
                <Stack alignItems="center" width="33.33%">
                    <Image src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/time-positive.svg" height="30px" width="30px" />
                    <Text fontSize="xs" color="blackAlpha.700" textAlign="center" lineHeight="1.03">Despacha sus productos a tiempo</Text>
                </Stack>
            </Stack>
            <Link fontSize="sm" marginY="1.2rem !important">Ver más datos del vendedor</Link>
            
            
        </Stack>
    )
}

export default Vendedor