/* eslint-disable jsx-a11y/alt-text */
import { Box, Image, ImageProps } from "@chakra-ui/react";

interface LogoProps extends ImageProps {}

const HomePageLogo: React.FC<LogoProps> = (props) => {
  return (
    <Image
      src="https://firebasestorage.googleapis.com/v0/b/food-dc0c9.appspot.com/o/logo%20e%20nome.png?alt=media&token=354f29b5-c569-4021-86ac-00e4fa0a0226"
      display={{ base: "block", md: "block" }}
      objectFit="contain"
      w="575px"
      h="175px"
      mb={8}
      mt={-4}
      {...props}
    />
  );
};

export default HomePageLogo;
