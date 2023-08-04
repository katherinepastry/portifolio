import React, { useState } from "react";
import { navLinks } from "../../utils/constants";
import { Box, Flex, Link, Text, Image, Spacer } from "@chakra-ui/react";


export default function NavbarNoScroll () {
  const [active, setActive] = useState("");

  return (
    
    <Box
    as="nav"
    w="full"
    h="88px"
    maxW='1160px'
    pos="fixed"
    top={0}
    zIndex={10000}
    bg="#FFFFFF"
    fill="#5e6159"
    shadow="sm"
    px={{ base: 6, sm: 16 }}
    fontFamily={"heading"}
    fontWeight={"bold"}
   
    >
      <Flex
        justify="space-between"
        alignItems='center'
       
        maxW="7xl"
        mx="auto"
        w="full"
      >
        <Link href="#" display="flex" alignItems="center" gap={2}>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/food-dc0c9.appspot.com/o/logocupcake.png?alt=media&token=50c0fdb0-f432-4e2b-a79b-93b459bfaab9"
            boxSize={{ base: "88px", md: "88px" }}
            objectFit="contain"
            alt="Logo"
            
            zIndex={1000}
          />
        </Link>
        <Spacer />
        <Flex
          as="ul"
          display={{ base: "none", sm: "flex" }}
          flexDirection="row"
          gap={10}
        >
          {navLinks.map((item) => (
            <Text
              as="li"
              listStyleType="none"
              key={item.id}
              color={active === item.title ? "#ef7b73" : "#5e6159"}
              onClick={() => setActive(item.title)}
            >
              <Link href={`#${item.id}`}>{item.title}</Link>
            </Text>
          ))}
        </Flex>
      </Flex>
    </Box>
    
  );
};
