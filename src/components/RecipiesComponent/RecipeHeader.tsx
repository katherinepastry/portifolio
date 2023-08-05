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
      fontSize="4xl"
    >
      {title}
    </Heading>
    <Text color="#2f2f2f" textAlign="center">
      <br />
    </Text>
  </Stack>
);

export default RecipeHeader;
