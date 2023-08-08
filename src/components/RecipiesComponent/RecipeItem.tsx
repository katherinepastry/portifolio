import { FC } from "react";
import {
  Center,
  SimpleGrid,
  Box,
  Image,
  Text,
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

interface Product {
  id: string;
  image_url: string;
  name: string;
  description: string;
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
        <Card maxW="sm" bg={cardColors[i % cardColors.length]} margin="0 auto">
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
  </Center>
);

export default RecipeItem;
