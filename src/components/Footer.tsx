import { Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

import img from "../assets/imgFooter.png"
import { IoIosPhonePortrait } from "react-icons/io"
import { FiMail } from "react-icons/fi"
import { GoLocation, GoMarkGithub } from "react-icons/go"
import { GrLinkedin } from "react-icons/gr"
import { ImTwitter } from "react-icons/im"
import { CgCopyright } from "react-icons/cg"



const Footer: React.FC = () => {
    return (
        <Stack marginTop="2rem">
            <Stack direction="row" alignItems="center" justifyContent="center">
                <Image src={img} height="100px" width="100px"/>
                <Stack>
                    <Stack direction="row">
                        <IoIosPhonePortrait color="pink"/>
                        <Text color="white" fontSize="sm">(+54) 370 4584696</Text>
                    </Stack>
                    <Stack direction="row">
                        <FiMail color="pink"/>
                        <Text color="white" fontSize="sm">agosgavilan3@gmail.com</Text>
                    </Stack>
                    <Stack direction="row">
                        <GoLocation color="pink"/>
                        <Text color="white" fontSize="sm">Formosa, Argentina</Text>
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction="row" spacing={5} justifyContent="center">
                <a href='https://www.linkedin.com/in/agostina-gavilan-283a03209/' target="_blank" rel="noreferrer">
                    <GrLinkedin fontSize="25px"/>
                </a>
                <a href='https://github.com/AgosGavilan' target="_blank" rel="noreferrer">
                    <GoMarkGithub fontSize="25px"/>
                </a>
                <a href="https://twitter.com/tinatsx" target="_blank" rel="noreferrer">
                    <ImTwitter fontSize="25px"/>
                </a>
            </Stack>
            <Stack direction="row" alignItems="center" marginTop="1.5rem !important">
                <CgCopyright color="white"/>
                <Text color="white" fontSize="xs">Este sitio no es una página oficial de Mercado Libre, fue hecho con fines 100% educativos. Sientete libre de utiizar su respositorio.</Text>
            </Stack>
        </Stack>
    )
}

export default Footer