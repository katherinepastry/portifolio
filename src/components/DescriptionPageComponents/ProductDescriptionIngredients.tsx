// ProductIngredients.tsx
import { Box, Text, Icon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

interface ProductIngredientsProps {
  ingredients: { value: string }[];
  textColor: string;
}

const ProductIngredients: React.FC<ProductIngredientsProps> = ({ ingredients, textColor }) => {
  return (
    <Box as="ul">
      <Text color={textColor} ml={2} lineHeight="1.6" fontWeight="bold" display="flex" alignItems="center" fontSize={{ base: "lg", md: "xl" }}>
        <Icon as={FaCheckCircle} boxSize={6} color="green.500" mr={2} />
        Ingredients
      </Text>
      {ingredients &&
        ingredients.map((ingredient, index) => (
          <Text as="li" key={index} fontSize={{ base: "md", md: "lg" }} color={textColor} fontWeight="300" borderRadius="md" p={2} marginLeft={8} textAlign="justify" w="full">
            {ingredient.value}
          </Text>
        ))}
    </Box>
  );
};

export default ProductIngredients;
