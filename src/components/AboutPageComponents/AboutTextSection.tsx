// TextSection.tsx
import { Text, TextProps } from "@chakra-ui/react";

interface TextSectionProps extends TextProps {
  text: string;
}

const AboutTextSection: React.FC<TextSectionProps> = ({ text, ...rest }) => {
  return (
    <Text color="#ffffff" fontWeight="500" fontSize="20px" mt="16px" mb="30px" {...rest}>
      {text}
    </Text>
  );
};

export default AboutTextSection;
