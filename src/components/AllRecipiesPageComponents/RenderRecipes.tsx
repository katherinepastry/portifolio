// RenderRecipes.tsx
import { SimpleGrid, Box, Image, Text, Center, Button } from "@chakra-ui/react";
import Link from "next/link";

interface Recipe {
  id: string;
  image_url: string;
  name: string;
  category?: string[];
}

interface RenderRecipesProps {
  recipeCount: number;
  filteredProductArray: Recipe[];
  handleShowMore: () => void;
}

const cardColors = ["#FBBACD", "#C1DF8D", "#CD9DFD", "#8FD9FF"];

const RenderRecipes: React.FC<RenderRecipesProps> = ({ recipeCount, filteredProductArray, handleShowMore }) => {
  return (
    <Center>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={10}>
        {filteredProductArray.slice(0, recipeCount).map((recipe, i) => (
          <Link
            href={`/ProductDescriptionPage/${recipe.id}`}
            key={recipe.id}
            prefetch={false}
            style={{ textDecoration: "none" }}
          >
            <Box
              key={i}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              bg={cardColors[i % cardColors.length]}
              p={6}
            >
              <Image
                src={recipe.image_url}
                alt={`Descrição da Receita ${recipe.name}`}
                objectFit="cover"
                w="auto"
                h="auto"
                mb={4}
              />
              <Text fontSize="xl" fontWeight="semibold">
                {recipe.name}
              </Text>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
      {recipeCount < filteredProductArray.length && (
        <Button
          borderRadius="full"
          _hover={{ opacity: 0.8 }}
          _active={{ transform: "scale(0.9)" }}
          boxShadow="lg"
          bg="#FF80A5"
          p={4}
          onClick={handleShowMore}
        >
          Show More Recipes...
        </Button>
      )}
    </Center>
  );
};

export default RenderRecipes;
