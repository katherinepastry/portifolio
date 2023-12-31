
import { Box, Heading, HeadingProps } from "@chakra-ui/react";

interface HeaderProps extends HeadingProps {
  title: string;
}

const HomePageHeader: React.FC<HeaderProps> = ({ title, ...props }) => {
  return (
    <Heading
      as="h1"
      fontSize={{ base: "25px", md: "42px", lg: "40px" }}
      lineHeight={{ base: "1.0" }}
      {...props}
    >
      {title}
    </Heading>
  );
};

export default HomePageHeader;
