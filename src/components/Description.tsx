import { Box, Button, Heading, Icon, Input, Link, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { PyR } from "../product/types";
import { BsArrowReturnRight } from "react-icons/bs"
import s from "../styles/Description.module.css"


const preguntasFrecuentes: string[] = [
    "Costo y tiempo de envío",
    "Devoluciones gratis",
    "Medios de pagos y promociones",
    "Garantía"
]

const pregYrtas: PyR[]= [
    {
        pregunta: "Hola tenes en stock el rosado?",
        respuesta: "Si lo tenemos disponible",
        date: "10/07/2022"
    },
    {
        pregunta: "Hacen envios a todo el pais no? lo empacan para regalo??",
        respuesta: "Si hacemos envíos y lo enviamos con bolsa de regalo",
        date: "09/05/2022"
    },
    {
        pregunta: "Hola tenes en stock el de 70cm?",
        respuesta: "Si lo tenemos disponible",
        date: "12/02/2022"
    }
]
const Description: React.FC = () => {
    const [newQ, setnewQ] = useState<PyR> ({
        pregunta: ""
    })

    useEffect(() => {

    }, [pregYrtas])

    const handleChange = (e:any) => {
        e.preventDefault()
        setnewQ((prev: PyR) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        pregYrtas.push(newQ)
        setnewQ({
            pregunta: ""
        })
    }

    

    return (
        <Stack paddingY="25px" marginInline="auto" width="90%" paddingInline="0.5rem" position="relative">
            <Box paddingBottom="30px">
                <Text fontSize="24px" paddingBottom="22px">Descripción</Text>
                <Stack spacing={5} color="#666" fontSize="20px">
                <Text>PELUCHE IMPORTADO PERSONAJE STITCH</Text>
                <Text>MEDIDA 1 METRO (100 CM )</Text>
                <Text>GIGANTE</Text>
                <Text>DISPONIBLE: STITCH (CELESTE) O ANGEL (ROSA)</Text>
                <Text>SE PUEDE RETIRAR POR:</Text>
                <Stack>
                    <Text>• AV. CORRIENTES Y URUGUAY</Text>
                    <Text>• VILLA PUEYRREDON</Text>
                </Stack>
                <Text>
                    Realizamos envíos por motomensajeria y tambien por correo argentino a todo el país    
                </Text>
                <Text>
                ****NO SE OLVIDE DE VISITAR TODOS NUESTROS PRODUCTOS****
                </Text>
                </Stack>
            </Box>

            <Box paddingTop="24px">
                <Heading fontSize="24px" paddingBottom="22px" fontWeight="400">Preguntas y Respuestas</Heading>
                <Stack paddingY="1rem">
                    <Text paddingBottom="1em" fontWeight="bold" fontSize="18px">¿Qué querés saber?</Text>
                    <Stack direction="row" spacing={3}>
                        {preguntasFrecuentes?.map(p => (
                            <Link  
                            paddingX="12px"
                            color="rgb(52, 131, 250)"
                            backgroundColor="rgba(65,137,230,.15)"
                            borderRadius="5px"
                            fontSize="14px"
                            height="32px"
                            lineHeight="32px"
                            cursor="pointer"
                            fontWeight="extrabold"
                            >
                                {p}
                            </Link>
                        ))}
                    </Stack>
                </Stack>
                <Stack paddingY="1.8rem">
                    <Text paddingBottom="10px" fontWeight="bold" fontSize="18px">Preguntale al vendedor</Text>
                    <form>
                        <Stack direction="row" spacing={4}>
                                <Input
                                value={newQ.pregunta}
                                name="pregunta"
                                onChange={handleChange}
                                width="100%"
                                height="3rem"
                                borderColor="blackAlpha.400"
                                placeholder="Escribí tu pregunta..."
                                _placeholder={{
                                    color: "blackAlpha.500",
                                }}
                                />
                                <Button 
                                height="3rem"
                                backgroundColor="#3483fa"
                                color="white"
                                paddingX="3rem"
                                _hover={{backgroundColor: "blue.600"}}
                                onClick={handleSubmit}
                                >
                                    Preguntar
                                </Button>
                        </Stack>
                    </form>
                </Stack>
                <Stack spacing={5}>
                    <Text fontWeight="bold" fontSize="18px">Últimas realizadas</Text>
                    <Stack spacing={3}>
                            {pregYrtas?.map(el => (
                                <Box>
                                    <Stack className={s.pregunta} direction="row">
                                        <Text>{el.pregunta.charAt(0).toUpperCase()}{el.pregunta.slice(1)}</Text>
                                        <Stack className={s.denunciar}>
                                            <Link fontSize="sm">Denunciar</Link>
                                        </Stack>
                                    </Stack>
                                    {el.respuesta?.length ?
                                    <Stack className={s.pregunta} direction="row" marginLeft="10px" color="blackAlpha.700"  alignItems="baseline">
                                        <Icon as={BsArrowReturnRight} height="25px"></Icon>
                                        <Text>{el.respuesta}</Text>
                                        <Text fontSize="12px" alignItems="baseline">{el.date}</Text>
                                        <Stack className={s.denunciar}>
                                            <Link fontSize="sm">Denunciar</Link>
                                        </Stack>
                                    </Stack>
                                    : ""}
                                </Box>
                            ))}
                    </Stack>
                    <Link fontSize="sm" paddingBottom="1.3rem">Ver todas las preguntas</Link>
                </Stack>
            </Box>
        </Stack>
    )
}

export default Description