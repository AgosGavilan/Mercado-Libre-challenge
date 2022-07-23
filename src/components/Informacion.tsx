import { Box, Button, Icon, Link, Stack, StackDivider, Text } from "@chakra-ui/react";
import React from "react";
import { BsHeart } from "react-icons/bs"
import { AiFillStar, AiOutlineTrophy } from "react-icons/ai";
import { IoShieldCheckmarkOutline } from "react-icons/io5"

import mock from "../product/mock";
import s from "../styles/informacion.module.css"

const Informacion: React.FC = () => {
    const {sold_quantity, title, price, currency_id, condition} = mock.product


    return (
        <Stack border="1px solid" borderColor="blackAlpha.300" borderRadius="10px" padding="1rem">
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
                <Text marginTop="0px !important" fontSize="18px">en 12x $1.166,60</Text>
                <Link fontSize="sm" marginTop="3px !important" color="#3483fa">Ver los medios de pago</Link>
            </Stack>
            <Stack marginTop="1rem !important">
                <Stack color="rgb(0, 166, 80)" direction="row" spacing={3}>
                    <Icon viewBox="0 0 24 24" height="25px" fontSize="21px">
                        <path 
                        stroke="#00a650"
                        fill="none"
                        d="M3,18 L1,18 L1,3 L14,3 L14,17 M14,18 L9,18 M6,21 C7.65685425,21 9,19.6568542 9,18 C9,16.3431458 7.65685425,15 6,15 C4.34314575,15 3,16.3431458 3,18 C3,19.6568542 4.34314575,21 6,21 Z M17,21 C18.6568542,21 20,19.6568542 20,18 C20,16.3431458 18.6568542,15 17,15 C15.3431458,15 14,16.3431458 14,18 C14,19.6568542 15.3431458,21 17,21 Z M14,8 L19,8 L23,13 L23,18 L20,18"
                        />
                    </Icon>
                    <Stack>
                        <p className={s.sinnegrita}>Llega gratis <span className={s.negrita}>entre el Jueves y el Lunes 1 de Agosto</span></p>
                        <Link marginTop="2px !important" fontSize="sm" color="#3483fa">Ver más formas de entrega</Link>
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction="row" marginTop="1rem !important">
                <Icon viewBox="0 0 24 24" height="25px" fontSize="25px" fontWeight="bold">
                    <path 
                    fill="none"
                    d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1"
                    stroke="#00a650"
                    />
                </Icon>
                <Stack>
                    <Text color="#00a650" fontWeight={400}>Devolución gratis</Text>
                    <Text fontSize="sm" color="blackAlpha.600" marginTop="0px !important">Tenés 30 días desde que lo recibís</Text>
                    <Link fontSize="sm" marginTop="0px !important" color="#3483fa">Conocer más</Link>
                </Stack>
            </Stack>
            <Stack marginTop="1rem !important">
                <Text fontSize="18px" fontWeight={600}>¡Última disponible!</Text>
            </Stack>
            <Stack marginTop="1.2rem !important">
                <Button height="3rem" backgroundColor="#3483fa" color="white" paddingX="3rem" _hover={{backgroundColor: "blue.600"}}>Comprar ahora</Button>
                <Button height="3rem" backgroundColor="rgba(65,137,230,.15)" color="#3483fa" paddingX="3rem">Agregar al carrito</Button>
            </Stack>
            <Stack marginTop="1.4rem !important" marginBottom="10px !important" spacing={4} alignItems="flex-start">
                <Stack direction="row">
                    <IoShieldCheckmarkOutline color="gray" fontSize="30px"/>
                    <Stack fontSize="sm" lineHeight="1.3">
                        <p className={s.CP}>Compra Potegida, <span className={s.extra}>recibí el producto que esperabas o te devolvemos tu dinero.</span></p>
                    </Stack>
                </Stack>
                <Stack direction="row">
                    <AiOutlineTrophy color="gray" fontSize="18px"/>
                    <Stack fontSize="sm">
                        <p className={s.CP}>Mercado Puntos. <span className={s.extra}>Sumás 171 puntos</span></p>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Informacion