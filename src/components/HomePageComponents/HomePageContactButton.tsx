// ContactButton.tsx
import { Box, Button, ButtonProps } from "@chakra-ui/react";

interface ContactButtonProps extends ButtonProps {}

const ContactButton: React.FC<ContactButtonProps> = (props) => {
  return (
    <a href="#contact">
      <Button
        p="26px 56px"
        fontSize="20px"
        lineHeight="1.1rem"
        textAlign="center"
        borderWidth="1px"
        borderRadius="16px 0px"
        textDecoration="none"
        fontWeight={500}
        color="#FFFFFF"
        backgroundColor="#191A17"
        _hover={{ backgroundColor: "#95D477" }}
        {...props}
      >
        Contact
      </Button>
    </a>
  );
};

export default ContactButton;
