// RenderRecipes.tsx
import { separateCamelCase } from "@/utils/constants/functions";
import {
  SimpleGrid,

  Image,
  Text,
  Center,
  Button,
  
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,

} from "@chakra-ui/react";
import Link from "next/link";

interface Recipe {
  id: string;
  image_url: string;
  name: string;
  category?: string[];
  description: string;
}

interface RenderRecipesProps {
  recipeCount: number;
  filteredProductArray: Recipe[];
  handleShowMore: () => void;
}

const cardColors = ["#FBBACD", "#C1DF8D", "#CD9DFD", "#8FD9FF"];

const RenderRecipes: React.FC<RenderRecipesProps> = ({
  recipeCount,
  filteredProductArray,
  handleShowMore,
}) => {
  return (
    <Center display='flex' flexDir='column'>
      
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={10}>
        {filteredProductArray.slice(0, recipeCount).map((recipe, i) => (
          <Card
            maxW="sm"
            bg={cardColors[i % cardColors.length]}
            margin="0 auto"
          >
            <CardBody
              display="flex"
              flexDirection="column"
              textAlign="left"
              position="relative"
              top="0"
            >
              <Image
                src={recipe.image_url}
                alt={`Descrição da Receita ${recipe.name}`}
                borderRadius="lg"
                objectFit="contain"
              />

              <Stack mt="6" spacing="3">
                <Heading size="md">{recipe.name}</Heading>
                <Text>{recipe.description}</Text>
                <Text>
                 Category: {recipe.category?.map(separateCamelCase).join(", ")}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter margin="0 auto">
              <Center>
                <Link
                  href={`/ProductDescriptionPage/${recipe.id}`}
                  key={recipe.id}
                  prefetch={false}
                  passHref
                >
                  <Button variant="solid" colorScheme="blue">
                    Click to learn more
                  </Button>
                </Link>
              </Center>
            </CardFooter>
          </Card>
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
