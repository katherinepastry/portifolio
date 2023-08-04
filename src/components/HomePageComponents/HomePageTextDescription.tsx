
import { Box, Text, TextProps } from "@chakra-ui/react";

interface TextDescriptionProps extends TextProps {
  text: string;
}

const HomePageTextDescription: React.FC<TextDescriptionProps> = ({ text, ...props }) => {
  return (
    <Text maxW="580px" color="#353731" fontWeight="400" my={4} {...props}>
      {text}
    </Text>
  );
};

export default HomePageTextDescription;
