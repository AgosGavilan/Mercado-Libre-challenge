import { Box, Container, Image, Stack, StackDivider, Text } from "@chakra-ui/react";
import React from "react";

import { Props } from "../app/screens/Details";

const Carrousel: React.FC<Props> = ({infocarousel, product}) => {

    return (
        <Stack> 
            <Stack direction="row" marginBottom="16px" spacing={0}>
                {infocarousel.pictures?.map(el => (
                    <Container padding="5px">
                        <Stack 
                        border="1px solid"
                        borderColor="gray.200"
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
                                <Text fontSize="24px" marginBottom="-10px" color="#333">${el.price}</Text>
                                {el.price! >= 4000
                                ? <Text color="#00a650!important" fontWeight="bold" fontSize="14px" margin={0}>Envio Gratis</Text>
                                : ""}
                                <Text fontSize="14px" color="blackAlpha.800">{el.title}</Text>
                            </Stack>
                        </Stack>
                    </Container>
                ))}
            </Stack>

        </Stack>
    )
}

export default Carrousel