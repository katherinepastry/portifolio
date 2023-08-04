
import { Center, CenterProps, Heading } from "@chakra-ui/react";

interface HeaderProps extends CenterProps {
  title: string;
}

const AboutHeader: React.FC<HeaderProps> = ({ title, ...rest }) => {
  return (
    <Center {...rest}>
      <Heading as="h1" color="#ffffff" fontSize={{ base: "32px", md: "38px" }} fontWeight="bold" ml={{ base:'50px',md:'auto' }}>
        {title}
      </Heading>
    </Center>
  );
};

export default AboutHeader;
