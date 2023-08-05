/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import DecorativeImage from "@/components/AboutPageComponents/AboutDecorativeImage";
import AboutHeader from "@/components/AboutPageComponents/AboutHeader";
import AboutTextSection from "@/components/AboutPageComponents/AboutTextSection";
import AboutInteractiveImage from "@/assets/AboutAndHomeImages/AboutImage";
import { SectionWrapper } from "@/hoc";
import { slideIn } from "@/utils/motion";
import { Box, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
        overflow="hidden"
        fontFamily="Inter, sans-serif"
        fontSize="18px"
        lineHeight="1.667em"
        fontWeight="400"
        color="#5e6159"
        background="#ffb077"
        pt={{ base: "50px", md: "70px" }}
        pb="70px"
        minHeight="100vh"
      >
        <DecorativeImage
          src="https://assets.website-files.com/637fa7b1a7c89ce08dff2aec/6384e8dfebaf6acfd4579496_shape-2-decorative-nutritionist-x-webflow-template.svg"
          mb="30px"
        />
        <AboutHeader
          title="Meet Katherine Gerhold - The Artisan Pastry Chef"
          mb="20px"
        />

        <Box maxWidth="1282px" px="24px" mx="auto" textAlign="justify">
          <AboutTextSection text="Hello! I'm Katherine, a passionate pastry chef with a love for all things sweet and savory. Baking has been my lifelong passion which led me to pursue a degree in Baking and Pastry Arts from Columbus Community College." />
          <AboutTextSection text="My interest in baking isn't limited to just traditional pastries. I am curious about different culinary cultures and I thoroughly enjoy exploring and experimenting with diverse recipes from around the globe. Currently, I'm delving into the delightful world of Mediterranean cuisine, trying to master the art of baklava and other regional specialties." />
          <Center mb="30px">
            <AboutInteractiveImage />
          </Center>
          <AboutTextSection text="Apart from baking and cooking, my free time is filled with a different kind of love - my pets. I have a charming dog and a cuddly cat who are my faithful companions in life's everyday adventures. Together, we love to explore new places, with a special fondness for local coffee shops and bakeries. I'm always on the hunt for new flavors and inspiration, and these excursions provide the perfect opportunity to discover novel ideas and taste sensations." />
          <AboutTextSection text="I believe that baking is a joyful adventure and an exciting journey of discovery. And, even the occasional burnt or overcooked dish simply adds to our rich tapestry of culinary experiences, teaching us valuable lessons and making our journey more memorable. I look forward to sharing my culinary journey with you!" />
        </Box>
      </Box>
    </motion.div>
  );
};

export default SectionWrapper(About, "about");
