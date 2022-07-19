import { Stack, Table, TableContainer, Tbody, Td, Text, Tr } from "@chakra-ui/react";
import React from "react";

const Tabla: React.FC = () => {
    return (
        <Stack paddingY="25px" marginInline="auto" width="90%" paddingInline="0.5rem" position="relative">
            <Text fontSize="24px" paddingBottom="22px">Características principales</Text>
            <Stack>
                 <TableContainer borderRadius="5px" border="1px solid #ededed">
                    <Table>
                        <Tbody>
                            <Tr>
                                <Td width="200px" background="#ebebeb" fontWeight="bold">Marca</Td>
                                <Td background="#f5f5f5">DISNEY</Td>
                            </Tr>
                            <Tr>
                                <Td width="200px" background="#f5f5f5" fontWeight="bold">Modelo</Td>
                                <Td>STICH</Td>
                            </Tr>
                            <Tr>
                                <Td width="200px" background="#ebebeb" fontWeight="bold">Franquicia</Td>
                                <Td background="#f5f5f5">STICH</Td>
                            </Tr>
                            <Tr>
                                <Td width="200px" background="#f5f5f5" fontWeight="bold">Animal</Td>
                                <Td>STICH</Td>
                            </Tr>
                            <Tr>
                                <Td width="200px" background="#ebebeb" fontWeight="bold">Personaje</Td>
                                <Td background="#f5f5f5">STICH</Td>
                            </Tr>
                        </Tbody>

                    </Table>
                 </TableContainer>
            </Stack> {/*tabla */}
            <Stack spacing={5}>
                <Text fontSize="20px" paddingTop="22px">Otras características</Text>
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