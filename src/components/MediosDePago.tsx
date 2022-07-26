import { Box, Image, Link, Stack, StackDivider, Text } from "@chakra-ui/react";
import React from "react";

const MediosDePago: React.FC = () => {
    return (
        <Stack 
        border="1px solid" 
        borderColor="blackAlpha.300" 
        borderRadius="10px" 
        padding="1rem"
        divider={<StackDivider />}>
            <Stack>
                <Text marginTop="12px" fontSize="18px" marginBottom="1rem">Devolución gratis</Text>
                <Text color="blackAlpha.600" fontSize="sm" marginTop="3px !important" lineHeight="1.3">Tenés 30 dias desde que recibís el producto para devolverlo. ¡No importa el motivo!</Text>
                <Link fontSize="sm" marginTop="1rem !important" marginBottom="1.3rem !important">Conocer más sobre devoluciones</Link>
            </Stack>
            <Stack>
                <Text marginTop="12px" fontSize="18px" marginBottom="1rem">Garantía</Text>
                <Stack marginBottom="1rem !important">
                    <Text marginBottom="8px !important">Compra protegida con Mercado Pago</Text>
                    <Text color="blackAlpha.600" fontSize="sm" marginTop="3px !important" lineHeight="1.3">Recibi el producto que esperabas o te devolvemos tu dinero</Text>
                </Stack>
                <Stack>
                    <Text marginBottom="6px !important">Garantía del vendedor</Text>
                    <Text color="blackAlpha.600" fontSize="sm" marginTop="3px !important">Sin garantía</Text>
                </Stack>
                <Link fontSize="sm" marginTop="1.3rem !important" marginBottom="1.5rem !important">Conocer más sobre garantía</Link>
            </Stack>
            <Stack>
                <Text marginTop="12px" fontSize="18px" marginBottom="8px !important">Medios de pago</Text>
                <Stack width="100%" spacing={6}>
                    <Stack>
                        <Text>Hasta 12 cuotas sin tarjeta</Text>
                        <Box>
                            <Image src="https://http2.mlstatic.com/storage/logos-api-admin/51b446b0-571c-11e8-9a2d-4b2bd7b1bf77-m.svg"/>
                        </Box>
                    </Stack>
                    <Stack>
                        <Text>Tarjetas de credito</Text>
                        <Text color="blackAlpha.600" fontSize="sm" marginTop="3px !important" lineHeight="1.3">¡Cuotas sin interés con bancos seleccionados!</Text>
                        <Stack direction="row" spacing={6} marginTop="1rem !important">
                            <Box>
                                <Image src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg" />
                            </Box>
                            <Box>
                                <Image src="https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg" />
                            </Box>
                            <Box>
                                <Image src="https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg" />
                            </Box>
                            <Box>
                                <Image src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg" />
                            </Box>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Text>Tarjetas de débito</Text>
                        <Stack direction="row" spacing={6}>
                            <Box>
                                <Image src="https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg" />
                            </Box>
                            <Box>
                                <Image src="https://http2.mlstatic.com/storage/logos-api-admin/ce454480-445f-11eb-bf78-3b1ee7bf744c-m.svg" />
                            </Box>
                            <Box>
                                <Image src="https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg" />
                            </Box>
                            <Box>
                                <Image src="https://http2.mlstatic.com/storage/logos-api-admin/cb0af1c0-f3be-11eb-8e0d-6f4af49bf82e-m.svg" />
                            </Box>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Text>Efectivo</Text>
                        <Stack direction="row" spacing={6}>
                            <Box>
                                <Image src="https://http2.mlstatic.com/storage/logos-api-admin/fec5f230-06ee-11ea-8e1e-273366cc763d-m.svg" />
                            </Box>
                            <Box>
                                <Image src="https://http2.mlstatic.com/storage/logos-api-admin/443c34d0-571b-11e8-823a-758d95db88db-m.svg" />
                            </Box>
                        </Stack>
                    </Stack>
                    <Link fontSize="sm" marginTop="1.3rem !important" marginBottom="1rem !important" fontWeight={400}>Conocé otros medios de pago</Link>
                </Stack>
            </Stack> {/*tercero*/}
        </Stack>
    )
}

export default MediosDePago