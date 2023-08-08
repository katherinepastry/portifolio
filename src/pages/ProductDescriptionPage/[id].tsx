/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  VStack,
  Heading,
  useBreakpointValue,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";
import { Product, UseProductContext } from "@/context/context";
import NavigationBar from "@/components/NavBarComponent/NavBarContainer";
import Link from "next/link";
import ProductDescriptionCategory from "@/components/DescriptionPageComponents/ProductDescriptionCategory";
import ProductDescriptionImage from "@/components/DescriptionPageComponents/ProductDescriptionImage";
import ProductDescriptionIngredients from "@/components/DescriptionPageComponents/ProductDescriptionIngredients";
import ProductDescriptionMethod from "@/components/DescriptionPageComponents/ProductDescriptionMethod";
import ProductDescriptionText from "@/components/DescriptionPageComponents/ProductDescriptionText";

export default function ProductPage() {
 
  const router = useRouter();
  const { id } = router.query;

  const { ProductArray } = UseProductContext();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const product = ProductArray.find((item) => item.id === id);
    setProduct(product!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, ProductArray]);

  if (!product) {
    return (
      <Box fontSize="xl" fontWeight="bold" p={5}>
        Product not found
      </Box>
    );
  }

  const textColor = useColorModeValue("gray.700", "white");

  return (
    <>
    <NavigationBar />
    <Box
      bg="#FED0D0"
      //minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow={{ md: "auto", base: "scroll" }}
      pb={{base:50}}
      pt={{base:50}}
      pl={{base:50}}
      pr={{base:50}}
    >
      <Grid
        gridTemplateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }}
        justifyItems="center"
        alignItems='center'
        pt={{base:10, lg:"1px"}}
        pb={{base:10,lg:5}}
        pl={{sm:5,lg:6}}
        pr={{sm:5,lg:6}}
        //mt={{base:16}}
       
        
        bg="rgb(251, 226, 232)"
        borderRadius="md"
        //mt={{sm:"16px", md: "16px", base: "16px" }}
        //maxW={{ md: "80%", base: "100%" }}
      >
        <ProductDescriptionImage imageUrl={product.image_url!} name={product.name} />
        <VStack align="start" spacing={1} maxW={{ sm: "xl" }}>
          <Heading
            
            color={textColor}
            fontSize={{ sm:"1xl", base: "2xl", md: "3xl" }}
            lineHeight="1.2"
            fontWeight="bold"
            mt={4}
            pt={16}
            pl={16}
           
          >
            {product.name}
          </Heading>

          <ProductDescriptionText description={product.description} textColor={textColor} />
          <ProductDescriptionCategory category={product.category} textColor={textColor} />
          <ProductDescriptionIngredients ingredients={product.ingredients} textColor={textColor} />
          <ProductDescriptionMethod method={product.method} textColor={textColor} />

          <Link href="/AllRecipesPage">
            <Button
              borderRadius={{sm:"50px", base:"8px"}}
              _hover={{ opacity: 0.8 }}
              _active={{ transform: "scale(0.9)" }}
              boxShadow="lg"
              bg="#FF80A5"
              color="white"
              p={4}
              w="full"
            >
              Back to Recipies...
            </Button>
          </Link>
        </VStack>
      </Grid>
    </Box>
  </>
  );
}
