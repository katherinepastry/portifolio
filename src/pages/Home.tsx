/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";

import { SectionWrapper } from "@/hoc";
import InteractiveImage from "@/assets/AboutAndHomeImages/HomeImage";
import ContactButton from "@/components/HomePageComponents/HomePageContactButton";
import HomePageTextDescription from "@/components/HomePageComponents/HomePageTextDescription";
import HomePageLogo from "@/components/HomePageComponents/HomePageLogo";
import HomePageHeader from "@/components/HomePageComponents/HomePageHeader";
const HomeComponent = () => {

  return (
    <>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
      py={0}
      fontSize="18px"
      lineHeight="1.667em"
      fontWeight="400"
      color="#191A17"
      minHeight="100vh"
      pb={32}
    >
      <Grid
        maxW="1282px"
        mx="auto"
        px={6}
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={6}
        alignItems="center"
        my={{ base: "100px", md: "auto" }}
        w="full"
      >
        <GridItem display="flex" flexDirection="column" justifyContent="space-around">
          <Box textAlign="left">
            <HomePageLogo />
            <Image
              mb="24px"
              src="https://assets.website-files.com/637fa7b1a7c89ce08dff2aec/6384e29b53b8230d59ee4219_shape-decorative-nutritionist-x-webflow-template.svg"
              alt=""
            />
            <HomePageHeader title="Hello, I'm Katherine Gerhold, Pastry Chef" />
            <HomePageTextDescription text="Baking and Pastry Arts degree by Columbus State Community College." />
            <Flex direction="row" justifyContent="left" mt={4}>
              <ContactButton />
            </Flex>
          </Box>
        </GridItem>
        <GridItem display="flex" flexDirection="column" justifyContent="center">
          <InteractiveImage />
        </GridItem>
      </Grid>
    </Box>
  </>
  );
};

export default SectionWrapper(HomeComponent, "Home");
