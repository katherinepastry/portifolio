// RecipeItensContainer.tsx
import { FC } from "react";
import { Center, Box } from "@chakra-ui/react";

interface RecipeItensContainerProps {
  children: React.ReactNode;
}

const RecipeItensContainer: FC<RecipeItensContainerProps> = ({ children }) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="space-around"
    bg="#FED0D0"
    minHeight="100vh"
    color="white"
  >
    <Center
      bg="rgb(251, 226, 232)"
      borderRadius={12}
      w='81%'
      pt='20px'
      pb='30px'
      pl='100px'
      pr='100px'
      textAlign="center"
      display="flex"
      flexDir="column"
    >
      {children}
    </Center>
  </Box>
);

export default RecipeItensContainer;
