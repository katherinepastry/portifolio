import { FC } from "react";
import { Center, SimpleGrid, Box, Image, Text, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack } from "@chakra-ui/react";
import Link from "next/link";

interface Product {
  id: string;
  image_url: string;
  name: string;
  description:string;
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
       
        <Card maxW='sm'  bg={cardColors[i % cardColors.length]} margin='0 auto'>
        <CardBody display='flex' justifyContent='center' alignItems='center' flexDirection='column' textAlign='left'>
       
          <Image
            src={recipe.image_url}
            alt={`Descrição da Receita ${recipe.name}`}
            borderRadius='lg'
            w='1770'
            h='80'
          />
         
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{recipe.name}</Heading>
            <Text>
            {recipe.description}
            </Text>
            
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
          <Link
         href={`/ProductDescriptionPage/${recipe.id}`}
         key={recipe.id}
         prefetch={false}
         passHref
       >
            <Button variant='solid' colorScheme='blue'>
            Click to learn more
            </Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
      
      ))}
    </SimpleGrid>
  </Center>
);

export default RecipeItem;
