// RecipeHeader.tsx
import { FC } from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";

interface RecipeHeaderProps {
  title: string;
}

const RecipeHeader: FC<RecipeHeaderProps> = ({ title }) => (
  <Stack spacing={12}>
    <Heading
      color="#2f2f2f"
      variant="h1"
      fontSize="3xl"
    >
      {title}
    </Heading>
    <Text color="#2f2f2f" textAlign="center">
      Below you can find some of my recipes, <br />
      if you want to know more or know other recipes click on the learn more button
    </Text>
  </Stack>
);

export default RecipeHeader;
