import { Box, Container, Image, Stack, StackDivider, Text, Link } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import s from "../styles/carousel.module.css"

import { Props } from "../app/screens/Details";

const Carrousel: React.FC<Props> = ({infocarousel}) => {
    
    useEffect(() => {
        let prevBtn = document.querySelector(".swiper-button-prev")
        let nextBtn = document.querySelector(".swiper-button-next")

        prevBtn?.classList.add(s.btnPrev)
        nextBtn?.classList.add(s.btnNext)
    }, [])

    return (
        <Stack paddingY="25px" marginInline="auto" width="90%" paddingInline="0.5rem" position="relative">
            <Text fontSize="24px" marginBottom="0.7rem">Publicaciones del vendedor</Text>
            <Swiper
                slidesPerView={3}
                spaceBetween={1}
                slidesPerGroup={2}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className={s.mySwiper}
                >
            <Stack>
                <Stack direction="row" spacing={0}>
                    {infocarousel.pictures?.map(el => (
                        <SwiperSlide key={el.id}>
                            <Container padding="5px">
                                <Stack 
                                border="1px solid"
                                borderColor="gray.200"
                                boxShadow="base"
                                borderRadius="4px"
                                width="220px" 
                                divider={<StackDivider marginY="1px"/>}
                                height="24rem"
                                _hover={{
                                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                                }}
                                cursor="pointer"
                                >
                                    <Image src={el.url} alt="peluche" borderBottom="10px"/>
                                    <Stack padding="5px 0.75rem 1rem 1rem">
                                        <Text fontSize="24px" marginBottom="-10px" color="#333">${new Intl.NumberFormat('es-AR').format(el.price!)}</Text>
                                        {el.price! >= 4000
                                        ? <Text color="#00a650!important" fontWeight="bold" fontSize="14px" margin={0}>Envio Gratis</Text>
                                        : ""}
                                        <Text fontSize="14px" color="blackAlpha.800">{el.title}</Text>
                                    </Stack>
                                </Stack>
                            </Container>
                        </SwiperSlide>
                    ))}
                </Stack>
            </Stack>
            </Swiper>
            <Link marginTop="1.5rem !important" fontSize="sm" color="#1259c3">Ver más publicaciones del vendedor</Link>
        </Stack>
    )
}

export default Carrousel