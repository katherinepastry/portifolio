// ProductImage.tsx
import { Box, Image } from "@chakra-ui/react";

interface ProductImageProps {
  imageUrl: string;
  name: string;
}

const ProductDescriptionImage: React.FC<ProductImageProps> = ({ imageUrl, name }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDir="column" mb={8}>
      <Image src={imageUrl} alt={name} objectFit="contain" maxW="85%" maxH="85%" borderRadius="lg" boxShadow="md" />
    </Box>
  );
};

export default ProductDescriptionImage;
