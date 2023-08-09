import React from "react";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  Text,
  Box,
  VStack,
  Heading,
} from "@chakra-ui/react";
import {
  faHome,
  faBriefcase,
  faUtensils,
  faEnvelope,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  icon: typeof faHome;
  onClick: (id: string) => void;
  children: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, icon, children }) => (
  <Box w="100%" borderTop="1px solid rgba(255, 255, 255, 0.1)">
    <Box
      as="button"
      w="67%"
      py={2}
      pl={3}
      ml={6}
      onClick={() => onClick(children!.toString())} // Chama onClick com o id
      display="flex"
      alignItems="flex-end"
      fontSize="24px"
      fontWeight="bold"
      gap={5}
      color="#FFFFFF80"
      _hover={{
        color: "#69F0AE",
      }}
    >
      <FontAwesomeIcon icon={icon} size="xs" />
      <Text ml={3}>{children}</Text>
    </Box>
  </Box>
);

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  const handleSmoothScroll = (itemId: string) => {
    const targetId =
     id==='UpdateProduct'|| id==='RegistrationProduct' || id === "AllRecipesPage" || id === "Recipes" || id === "About" || id === "Contact" ? `/#${itemId}` : `#${itemId}`;
    // Adicione aqui a lógica para fazer o scroll suave para o elemento
    window.location.href = targetId; // Exemplo simples, substitua pela sua lógica
    onClose();
  };

  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent bg="rebeccapurple" color="#FFFFFF80">
          <DrawerHeader display="flex" justifyContent="center">
            <IconButton
              bg="transparent"
              color="red"
              _hover={{ backgroundColor: "transparent" }}
              aria-label="Close menu"
              onClick={onClose}
              icon={<FontAwesomeIcon icon={faTimes} size="1x" color="pink.600" />}
            />
            <Heading color="#fff">Menu</Heading>
          </DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={4}>
              <MenuItem onClick={handleSmoothScroll} icon={faHome}>
                Home
              </MenuItem>
              <MenuItem onClick={handleSmoothScroll} icon={faUtensils}>
                Recipes
              </MenuItem>
              <MenuItem onClick={handleSmoothScroll} icon={faBriefcase}>
               About
              </MenuItem>
              <MenuItem onClick={handleSmoothScroll} icon={faEnvelope}>
                Contact
              </MenuItem>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default MobileDrawer;
