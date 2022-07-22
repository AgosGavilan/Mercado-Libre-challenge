import { Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Icon, Text, Link } from "@chakra-ui/react";
import React, { useState } from "react";

import { AiOutlineLike, AiOutlineDislike, AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai"
import { Opiniones } from "../product/types";

const comentarios: Opiniones[] = [
    {
        titulo: "Hermoso excelente",
        comentario: "Hermoso es para el cumple de mi hija. Excelente",
        date: "Hace 5 meses",
        id: "cero"
    },
    {
        titulo: "Muy bueno",
        comentario: "Muy bueno, excelente producto, es lo que esperaba.",
        date: "Hace 6 meses",
        id: "uno"
    },
    {
        titulo: "Excelente",
        comentario: "Hermoso mi hija le encanto,,,, lo recomiendo",
        date: "Hace 3 meses",
        id: "dos"
    },
]

const Comentarios: React.FC = () => {
    const [like, setLike] = useState<boolean>(true)
    const [dislike, setDislike] = useState(true)

    const handleLike = (r: string) => {
        let a = comentarios.filter(el => el.id === r)
        //console.log(a)
        let b = a.find(el => el.id === r)
        console.log(b)
        if(a.find(el => el.id === r)) setLike(!like)
    }

    const handleDislike = (g: string) => {
        setDislike(!dislike)
    }

    return (
        <Stack marginTop="2.5rem">
            <Tabs isFitted>
                <TabList color="black" borderBottom="1px solid" borderColor="lightgray">
                    <Tab 
                    _focus={{outline: "none", color:"#3483fa !important", borderBottom: "3px solid #3483fa"}} 
                    _hover={{color: "#3483fa !important"}}
                    _selected={{color: "#3483fa !important", borderBottom: "3px solid #3483fa"}}
                    fontWeight="bold"
                    >
                        Todas
                    </Tab>
                    <Tab 
                    _focus={{outline: "none", color:"#3483fa !important", borderBottom: "3px solid #3483fa"}} 
                    _hover={{color: "#3483fa !important"}}
                    _selected={{color: "#3483fa !important", borderBottom: "3px solid #3483fa"}}
                    fontWeight="bold"
                    >
                        Positivas
                    </Tab>
                    <Tab 
                    _focus={{outline: "none", color:"#3483fa !important", borderBottom: "3px solid #3483fa"}} 
                    _hover={{color: "#3483fa !important"}}
                    _selected={{color: "#3483fa !important", borderBottom: "3px solid #3483fa"}}
                    fontWeight="bold"
                    >
                        Negativas
                    </Tab>
                </TabList>

                <TabPanels marginTop="15px">
                    <TabPanel paddingLeft={0} paddingBottom="0px !important">
                        {comentarios?.map(el => (
                            <Stack marginBottom="2rem" key={el.id}>
                                <Stack direction="row" fontSize="26px" spacing={0}>
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
                                <Stack spacing={0} marginY="5px !important">
                                    <Text fontWeight="bold">{el.titulo}</Text>
                                    <Stack direction="row">
                                        <Text>{el.comentario}</Text>
                                        <Text color="blackAlpha.600" paddingLeft="5px">{el.date}</Text>
                                    </Stack>
                                </Stack>
                                <Stack direction="row" spacing={5}>
                                    <Stack direction="row" alignItems="center" color={like ? "blackAlpha.500" : ""}>
                                        <Icon
                                        key={el.id}
                                        as={like ? AiOutlineLike : AiTwotoneLike}
                                        cursor="pointer"
                                        onClick={() => handleLike(el.id)}
                                        />
                                        {like ?
                                        <Text>0</Text>
                                        : <Text>1</Text>
                                        }
                                    </Stack>
                                    <Stack direction="row" alignItems="center" color={dislike ? "blackAlpha.500" : ""}>
                                        <Icon 
                                        as={dislike ? AiOutlineDislike : AiTwotoneDislike} 
                                        cursor="pointer"
                                        onClick={() => handleDislike(el.id)}
                                        />
                                        {dislike ?
                                        <Text>0</Text>
                                        : <Text>1</Text>
                                        }
                                    </Stack>
                                </Stack>
                            </Stack>
                        ))}
                    </TabPanel>
                    <TabPanel paddingLeft={0} paddingBottom="0px !important">
                    {comentarios?.map(el => (
                            <Stack marginBottom="2rem">
                                <Stack direction="row" fontSize="26px" spacing={0}>
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
                                <Stack spacing={0} marginY="5px !important">
                                    <Text fontWeight="bold">{el.titulo}</Text>
                                    <Stack direction="row">
                                        <Text>{el.comentario}</Text>
                                        <Text color="blackAlpha.600" paddingLeft="5px">{el.date}</Text>
                                    </Stack>
                                </Stack>
                                <Stack direction="row" spacing={5}>
                                    <Stack direction="row" alignItems="center" color={like ? "blackAlpha.500" : ""}>
                                        <Icon
                                        key={el.id}
                                        as={like ? AiOutlineLike : AiTwotoneLike}
                                        cursor="pointer"
                                        onClick={() => handleLike(el.id)}
                                        />
                                        {like ?
                                        <Text>0</Text>
                                        : <Text>1</Text>
                                        }
                                    </Stack>
                                    <Stack direction="row" alignItems="center" color={dislike ? "blackAlpha.500" : ""}>
                                        <Icon 
                                        as={dislike ? AiOutlineDislike : AiTwotoneDislike} 
                                        cursor="pointer"
                                        onClick={() => handleDislike(el.id)}
                                        />
                                        {dislike ?
                                        <Text>0</Text>
                                        : <Text>1</Text>
                                        }
                                    </Stack>
                                </Stack>
                            </Stack>
                        ))}
                    </TabPanel>
                    <TabPanel marginY="3rem" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Text marginBottom="10px" fontSize="18px">¡Nada por acá!</Text>
                        <Text color="blackAlpha.700" lineHeight="1.09" fontSize="14px" width="210px" textAlign="center">Este producto aún no tiene opiniones negativas.</Text>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Link fontSize="sm">Ver todas las opiniones</Link>

        </Stack>
    )
}

export default Comentarios