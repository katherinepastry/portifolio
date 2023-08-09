// Recipes.tsx
import { FC, useState } from "react";
import { motion } from "framer-motion";
import { Button,Image } from "@chakra-ui/react";
import Link from "next/link";
import { slideIn } from "@/utils/motion";

import { UseProductContext } from "@/context/context";
import { SectionWrapper } from "@/hoc";

import RecipeHeader from "@/components/RecipiesComponent/RecipeHeader";
import RecipeItem from "@/components/RecipiesComponent/RecipeItem";
import RecipeItensContainer from "@/components/RecipiesComponent/RecipeItensContainer";


const cardColors = ["#FBBACD", "#C1DF8D", "#CD9DFD", "#8FD9FF"];

const Recipes: FC = () => {
  const [recipeCount, setRecipeCount] = useState(4);
  const { ProductArray } = UseProductContext();

  return (
    <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
      <RecipeItensContainer>
      <Image
              mb="20px"
              src="https://assets.website-files.com/637fa7b1a7c89ce08dff2aec/6384e29b53b8230d59ee4219_shape-decorative-nutritionist-x-webflow-template.svg"
              alt=""
            />
        <RecipeHeader title="My Recipes" />
        <RecipeItem recipeCount={recipeCount} ProductArray={ProductArray} />
        <Link href="/AllRecipesPage">
          <Button
            borderRadius="full"
            _hover={{ opacity: 0.8 }}
            _active={{ transform: "scale(0.9)" }}
            boxShadow="lg"
            bg="#FF80A5"
            p={4}
            mt={6}
            color='white'
          >
            More Recipes...
          </Button>
        </Link>
      </RecipeItensContainer>
    </motion.div>
  );
};

export default SectionWrapper(Recipes, "Recipes");
