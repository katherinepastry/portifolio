import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  Image,
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
import React, { MouseEvent } from "react";

interface MenuItemProps {
  icon: typeof faHome;
  onClick: (e: MouseEvent) => void;
  children: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, icon, children }) => (
  <Box w="100%" borderTop="1px solid rgba(255, 255, 255, 0.1)">
    <Box
      as="button"
      w="56%"
      py={2}
      pl={3}
      ml={6}
      onClick={onClick}
      display="flex"
      alignItems="center"
      fontSize="24px"
      fontWeight="bold"
      gap={5}
      color="#FFFFFF80"
      _hover={{
        color: "#69F0AE",
      }}
    >
      <FontAwesomeIcon icon={icon} size="sm" />
      <Text ml={3}>{children}</Text>
    </Box>
  </Box>
);

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  handleSmoothScroll: (id: string) => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  handleSmoothScroll,
}) => {
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
              icon={
                <FontAwesomeIcon icon={faTimes} size="1x" color="pink.600" />
              }
            />
            <Heading color="#fff">Menu</Heading>
          </DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={4}>
              <MenuItem
                onClick={() => handleSmoothScroll("Home")}
                icon={faHome}
              >
                Home
              </MenuItem>

              <MenuItem
                onClick={() => handleSmoothScroll("Recipes")}
                icon={faUtensils}
              >
                Recipes
              </MenuItem>

              <MenuItem
                onClick={() => handleSmoothScroll("about")}
                icon={faBriefcase}
              >
                About me
              </MenuItem>

              <MenuItem
                onClick={() => handleSmoothScroll("contact")}
                icon={faEnvelope}
              >
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
