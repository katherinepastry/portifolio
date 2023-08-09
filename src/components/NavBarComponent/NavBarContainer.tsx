"use client";
import {
  useBreakpointValue,
  Box,
  Flex,
  Text,
  VStack,
  useDisclosure,
  Button,
  Image,
  Tooltip,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MobileDrawer from "./MobileDrawer";
import NavbarScroll from "./NavBarScroll";
import Link from "next/link";
import { LockIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { signOut, useSession, signIn } from "next-auth/react";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    return (
      <Flex flexDirection={{ base: "column", md: "row" }} gap="2">
        {session ? (
          <>
            <Link href="/RegistrationProduct" passHref>
              <Button
                borderRadius={6}
                _hover={{ opacity: 0.8 }}
                _active={{ transform: "scale(0.9)" }}
                boxShadow="lg"
                colorScheme="facebook"
                p={4}
                color="white"
                leftIcon={<FontAwesomeIcon icon={faLeftLong} />}
              >
                Register product
              </Button>
            </Link>
            <Link href="/UpdateProduct" passHref>
              <Button
                borderRadius={6}
                _hover={{ opacity: 0.8 }}
                _active={{ transform: "scale(0.9)" }}
                boxShadow="lg"
                colorScheme="purple"
                p={4}
                color="white"
                leftIcon={<FontAwesomeIcon icon={faLeftLong} />}
              >
                Update product
              </Button>
            </Link>
            <Button
              onClick={() => signOut()}
              borderRadius={6}
              _hover={{ opacity: 0.8 }}
              _active={{ transform: "scale(0.9)" }}
              boxShadow="lg"
              colorScheme="red"
              p={4}
              color="white"
              rightIcon={<LockIcon />}
            >
              Logout
            </Button>
          </>
        ) : (
          <Link href="/login" passHref>
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
        )}
      </Flex>
    );
  };
  
  // Resto do componente NavigationBar permanece o mesmo.
  

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

      <MobileDrawer
        isOpen={isOpen}
        onClose={onClose}
       
      />
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
    zIndex={!isOpen ? 10000 : -1}
  >
    <Flex
      align="center"
      justifyContent="space-between"
      px={{ base: "4", md: "8" }}
      maxW="1160px"
      margin="auto"
    >
      <Box>
        {isLargeScreen ? <NavbarScroll /> : <SmallScreenNavbar />}
      </Box>
      <Box>
        {renderButton()}
      </Box>
    </Flex>
  </Box>
  );
}
