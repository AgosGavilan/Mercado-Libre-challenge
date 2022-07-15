import { Box, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Tabla: React.FC = () => {
    return (
        <Stack paddingY="25px" marginInline="auto" width="90%" paddingInline="0.5rem" position="relative">
            <Text fontSize="24px" marginBottom="0.7rem">Características principales</Text>
            <Stack></Stack> {/*tabla */}
            <Stack spacing={5}>
                <Text fontSize="20px">Otras características</Text>
                <Stack spacing={2}>
                    <Stack direction="row">
                        <Stack direction="row" marginRight="270px">
                            <Text fontWeight="bold" fontSize="sm">Material:</Text>
                            <Text fontSize="sm">Plush</Text>
                        </Stack>
                        <Stack direction="row">
                            <Text fontWeight="bold" fontSize="sm">Altura x Anocho:</Text>
                            <Text fontSize="sm">100cm x 1cm</Text>
                        </Stack>
                    </Stack>
                    <Stack direction="row">
                        <Text fontWeight="bold" fontSize="sm">Es material hipoalergénico:</Text>
                        <Text fontSize="sm">Si</Text>
                    </Stack>
                </Stack>
            </Stack>

        </Stack>
    )
}

export default Tabla