'use client'
import { useBreakpointValue, Box, Flex, Text, VStack, useDisclosure,Button,Image,Tooltip } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MobileDrawer from "./MobileDrawer";
import NavbarScroll from "./NavBarScroll";
import Link from "next/link";
import { LockIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { signOut, useSession,signIn } from "next-auth/react";


export default function NavigationBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const [isScrolled, setIsScrolled] = useState(false);
  const { data: session } = useSession();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

 

  const renderButton = () => {
    if (session) {
      return (
        <Button
        onClick={() => {
          signOut();
        }}
          borderRadius={6}
          _hover={{ opacity: 0.8 }}
          _active={{ transform: "scale(0.9)" }}
          boxShadow="lg"
          colorScheme="red"
          p={4}
          color="white"
          rightIcon={<LockIcon />}
        >
         {session? "Logout..." : "Login"}
        </Button>
      );
    } else {
      return (
        <Link href="/login">
          <Button
            borderRadius={6}
            _hover={{ opacity: 0.8 }}
            _active={{ transform: "scale(0.9)" }}
            boxShadow="lg"
            colorScheme="red"
            p={4}
            color="white"
            rightIcon={<LockIcon />}
          >
            Login
          </Button>
        </Link>
      );
    }
  };

  const SmallScreenNavbar = () => (
    <VStack spacing={4} alignItems="center">
      <Tooltip label="Click here to open the menu" fontSize="md">
        <Text onClick={onOpen}>
          <Image
            mt={6}
            src="https://firebasestorage.googleapis.com/v0/b/food-dc0c9.appspot.com/o/logocupcake.png?alt=media&token=50c0fdb0-f432-4e2b-a79b-93b459bfaab9"
            boxSize={{ base: "100px", md: "100px" }}
            objectFit="contain"
            alt="Logo"
            zIndex={1000}
          />
        </Text>
      </Tooltip>
      
      <MobileDrawer isOpen={isOpen} onClose={onClose} handleSmoothScroll={handleSmoothScroll} />
    </VStack>
  );

  return (
    <Box
      as="nav"
      h={{ base: "70px", md: "88px" }}
      w="full"
      bg="#FFFFFF"
      fill="#5e6159"
      shadow="sm"
      borderBottom="1px solid #E2E8F0"
      position={isScrolled ? "fixed" : "static"}
      zIndex={!isOpen ? 10000 : -1} // Use !isOpen to decide zIndex
    >
      {!isOpen && ( // Render top bar only if Drawer is not open
        <Box
          position="absolute"
          top="20px"
          right="10px"
          display="flex"
          alignItems="baseline"
        >
         
        </Box>
      )}
      <Flex
        align="center"
        justifyContent="center"
        px={{ base: "4", md: "8" }}
        maxW="1160px"
        margin="auto"
      >
        <Box position="absolute" top="6" right="10">
        {renderButton()}
      </Box>
        {isLargeScreen ? <NavbarScroll /> : <SmallScreenNavbar />}
      </Flex>
    </Box>
  );
}
