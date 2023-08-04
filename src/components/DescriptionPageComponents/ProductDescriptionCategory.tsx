// ProductCategory.tsx
import { Box, Text, Icon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

interface ProductCategoryProps {
  category: string[];
  textColor: string;
}

const ProductDescriptionCategory: React.FC<ProductCategoryProps> = ({ category, textColor }) => {
  return (
    <Box>
      <Text color={textColor} ml={2} lineHeight="1.6" fontWeight="bold" display="flex" alignItems="center" fontSize={{ base: "lg", md: "xl" }}>
        <Icon as={FaCheckCircle} boxSize={6} color="green.500" mr={2} />
        Category
      </Text>
      <Text fontSize={{ base: "md", md: "lg" }} color={textColor} fontWeight="300" borderRadius="md" p={2} textAlign="justify" w="full">
        {category ? category.join(", ") : ""}
      </Text>
    </Box>
  );
};

export default ProductDescriptionCategory;
