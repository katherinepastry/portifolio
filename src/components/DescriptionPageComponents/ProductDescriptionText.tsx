import { Box, Text, Icon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

interface ProductDescriptionProps {
  description: string;
  textColor: string;
}

const ProductDescriptionText: React.FC<ProductDescriptionProps> = ({ description, textColor }) => {
  return (
    <Box gap={6} my={4}>
      <Text color={textColor} ml={2} lineHeight="1.6" fontWeight="bold" display="flex" alignItems="center" fontSize={{ base: "lg", md: "xl" }}>
        Description
      </Text>
      <Text mt={3} fontSize={{ base: "md", md: "lg" }} color={textColor} fontWeight="300" borderRadius="md" p={2} textAlign="justify" w="full">
        {description}
      </Text>
    </Box>
  );
};

export default ProductDescriptionText;
