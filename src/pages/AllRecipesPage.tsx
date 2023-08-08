// AllRecipesPage.tsx
import { useState } from "react";
import {
  Box,
  Center,
  Grid,
  Heading,
  Stack,
  Text,
  VStack,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import NavigationBar from "@/components/NavBarComponent/NavBarContainer";
import { UseProductContext } from "@/context/context";
import { slideIn } from "@/utils/motion";
import FilterButton from "@/components/AllRecipiesPageComponents/FilterButton";
import RenderRecipes from "@/components/AllRecipiesPageComponents/RenderRecipes";
import ClearFiltersButton from "@/components/AllRecipiesPageComponents/ClearFiltersButton";

const buttonStyles = [
  { backgroundColor: "#4B5320", color: "white" },
  { backgroundColor: "#FF1493", color: "white" },
  { backgroundColor: "#8A2BE2", color: "white" },
  { backgroundColor: "#228B22", color: "white" },
];

const AllRecipesPage: React.FC = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const [recipeCount, setRecipeCount] = useState(8);
  const { ProductArray } = UseProductContext();
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const filteredProductArray = activeFilters.length
    ? ProductArray.filter((product) =>
        product.category
          ? product.category.some((category) =>
              activeFilters.includes(category)
            )
          : false
      )
    : ProductArray;

  const handleFilterClick = (filter: string) => {
    setActiveFilters((prevFilters) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((f) => f !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
  };

  const handleClearFilters = () => {
    setActiveFilters([]);
  };

  return (
    <>
      <NavigationBar />
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          bg="#FED0D0"
          p={{ base: "50px", md: "10px 0 166px 0" }}
          minHeight="100vh"
          color="white"
        >
          <Center
            borderRadius={12}
            maxW={{md:'60%'}}
            p={4}
            mt={6}
            textAlign="center"
            display="flex"
            flexDir="column"
          >
            <Stack spacing={6}>
              <Heading color="#2f2f2f" variant="h1" fontSize="4xl">
                My Recipes
              </Heading>
<<<<<<< Updated upstream
              {!isLargeScreen ? (
                <>
                  <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                    {["Vegan", "Gluten Free", "Salt", "Sweet"].map(
                      (filter, index) => (
                        <GridItem w="100%" h="10" key={index}>
                          <FilterButton
                            filter={filter}
                            isActive={activeFilters.includes(filter)}
                            style={buttonStyles[index]}
                            handleFilterClick={handleFilterClick}
                          />
                        </GridItem>
                      )
                    )}
                  </Grid>
                  <Center  display="flex" justifyContent="center">
                    <ClearFiltersButton
                      handleClearFilters={handleClearFilters}
                    />
                  </Center>
                </>
              ) : (
                <Stack
                  spacing={3}
                  direction={{ base: "column", md: "row" }}
                  mt={2}
                  alignItems="baseline"
                >
                  {["Vegan", "Gluten Free", "Salt", "Sweet"].map(
                    (filter, index) => (
                      <FilterButton
                        key={index}
                        filter={filter}
                        isActive={activeFilters.includes(filter)}
                        style={buttonStyles[index]}
                        handleFilterClick={handleFilterClick}
                      />
                    )
                  )}
                  <ClearFiltersButton handleClearFilters={handleClearFilters} />
                </Stack>
              )}
            </Stack>
            <VStack spacing={4} mt={4} w="full">
              <RenderRecipes
                recipeCount={recipeCount}
                filteredProductArray={filteredProductArray}
                handleShowMore={() => setRecipeCount((count) => count + 4)}
              />
            </VStack>
          </Center>
        </Box>
      </motion.div>
    </>
  );
};

export default AllRecipesPage;
