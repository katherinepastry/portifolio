// RenderRecipes.tsx
import {
  SimpleGrid,
  Box,
  Image,
  Text,
  Center,
  Button,
  ButtonGroup,
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
    <Center>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={10}>
        {filteredProductArray.slice(0, recipeCount).map((recipe, i) => (
          <Card
            maxW="sm"
            bg={cardColors[i % cardColors.length]}
            margin="0 auto"
            textAlign='left'
          >
            <CardBody
              display="flex"
              position='relative' top='0'
              flexDirection='column'
            >
              <Image
                src={recipe.image_url}
                alt={`Descrição da Receita ${recipe.name}`}
                borderRadius="lg"
                objectFit='contain'
              />

              <Stack mt="6" spacing="3">
                <Heading size="md">{recipe.name}</Heading>
                <Text>{recipe.description}</Text>
                <Text  fontSize="1xl">
                  Category: {recipe.category}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
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
              </ButtonGroup>
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
