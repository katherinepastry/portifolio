// RecipeItem.tsx
import { FC } from "react";
import { Center, SimpleGrid, Box, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

interface Product {
  id: string;
  image_url: string;
  name: string;
}

interface RecipeItemProps {
  recipeCount: number;
  ProductArray: Product[];
}

const cardColors = ["#FBBACD", "#C1DF8D", "#CD9DFD", "#8FD9FF"];

const RecipeItem: FC<RecipeItemProps> = ({ recipeCount, ProductArray }) => (
  <Center>
    <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={10}>
      {ProductArray.slice(0, recipeCount).map((recipe, i) => (
        <Box
          key={i}
          borderRadius="lg"
          overflow="hidden"
          boxShadow="md"
          bg={cardColors[i % cardColors.length]}
          p='20px'
        >
          <Link
            href={`/ProductDescriptionPage/${recipe.id}`}
            key={recipe.id}
            prefetch={false}
            passHref
          >
            <Image
              src={recipe.image_url}
              alt={`Descrição da Receita ${recipe.name}`}
              objectFit="cover"
              w="auto"
              h="auto"
              mb={4}
            />
          </Link>

          <Text fontSize="xl" fontWeight="semibold">
            {recipe.name}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  </Center>
);

export default RecipeItem;
