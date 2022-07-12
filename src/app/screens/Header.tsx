import { Link, Stack, Text, StackDivider, Icon } from "@chakra-ui/react";
import React from "react";

import { VscChevronRight } from "react-icons/vsc";

const Header: React.FC = () => {
  return (
    <Stack fontSize={14} spacing={5} marginBottom={2}>
      <Stack direction="row" marginTop={2}>
        <Text fontWeight="bold">También puede interesarte:</Text>
        <Text>squishmallows</Text>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Stack
          divider={
            <StackDivider
              borderColor="blackAlpha.300"
              height={3}
              alignSelf="center"
            />
          }
          direction="row"
        >
          <Text marginRight={1}>Volver al listado</Text>
          <Stack direction="row" alignItems="baseline" marginLeft={1}>
            <Link>Juegos y Juguetes</Link>
            <Icon
              as={VscChevronRight}
              color="blackAlpha.700"
              alignSelf="center"
            ></Icon>
            <Link>Peluches</Link>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          divider={
            <StackDivider
              borderColor="blackAlpha.300"
              height={3.5}
              alignSelf="center"
            />
          }
          spacing={3}
        >
          <Link>Compartir</Link>
          <Link>Vender uno igual</Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header