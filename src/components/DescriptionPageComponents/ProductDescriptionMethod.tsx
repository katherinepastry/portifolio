// ProductMethod.tsx
import { Box, Text, Icon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

interface ProductMethodProps {
  method: { value: string }[];
  textColor: string;
}

const ProductDescriptionMethod: React.FC<ProductMethodProps> = ({ method, textColor }) => {
  return (
    <Box as="ol">
      <Text color={textColor} ml={2} lineHeight="1.6" fontWeight="bold" display="flex" alignItems="center" fontSize={{ base: "lg", md: "xl" }}>
        <Icon as={FaCheckCircle} boxSize={6} color="green.500" mr={2} />
        Method
      </Text>
      {method &&
        method.map((method, index) => (
          <Text key={index} fontSize={{ base: "md", md: "lg" }} color={textColor} fontWeight="300" borderRadius="md" p={2} textAlign="justify" w="full" as="li">
            {method.value}
          </Text>
        ))}
    </Box>
  );
};

export default ProductDescriptionMethod;
