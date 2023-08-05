/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Flex,
  Input,
  Text,
  Button,
  FormControl,
  VStack,
  HStack,
  Textarea,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import emailjs from "emailjs-com";
import { FormEvent, useRef, useState } from "react";
import SectionWrapper from "@/hoc/SectionWrapper";
import Footer from "@/components/FooterComponent/footer";

const Contact = () => {
  const inputStyle = {
    bgColor: "transparent",
    focusBorderColor: "#DC2B2B",
    borderWidth: "0",
    borderRadius: "0px 0px 0px",
    borderBottomWidth: "1px",
    color: "#ddd",
  };

  const formControlSpacing = "15px";

  const formPadding = useBreakpointValue({ base: "20px", md: "50px" });
  const form = useRef<HTMLFormElement>(null);
  // Declare a new state variable for the button
  const [isSending, setIsSending] = useState(false);
  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    setIsSending(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_3ewzgx5",
          "template_fvsxilx",
          form.current,
          "z2hTv5ypFYjqlsLPx"
        )
        .then(
          (result) => {
            alert("Message sent successfully, thank you");
            console.log(result);
            if (form.current) {
              form.current.reset();
            }
            setIsSending(false);

            // Scroll to the element with id 'home'
            const homeElement = document.getElementById("home");
            if (homeElement) {
              homeElement.scrollIntoView({ behavior: "smooth" });
            }
          },
          (error) => {
            alert("erro");
            setIsSending(false);
          }
        );
    }
  };

  return (
    <>
      <Box display="flex" minHeight="100vh" pos="relative">
        <Box
          pos="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          background="url(https://firebasestorage.googleapis.com/v0/b/testesitejunia.appspot.com/o/wallpaperflare.com_wallpaper.jpg?alt=media&token=61629d06-54d5-4ab1-8a84-e033fe86be69)"
          zIndex={-1}
        />
        <Flex flex="0 1 900px" margin="auto" padding="20px">
          <Box
            pos="relative"
            bg="#3e3e3e"
            borderRadius="15px"
            overflow="hidden"
            w="100%"
            mb={20}
          >
            <Flex
              alignItems="center"
              padding="20px"
              bg="#4d4d4f"
              borderTopRadius="15px"
              
            >
              <HStack spacing="3" marginRight="auto">
                <Box w="8px" h="8px" borderRadius="8px" bg="#ed1c6f"></Box>
                <Box w="8px" h="8px" borderRadius="8px" bg="#e8e925"></Box>
                <Box w="8px" h="8px" borderRadius="8px" bg="#74c54f"></Box>
              </HStack>
              <HStack spacing="2">
                <Box w="3px" h="3px" borderRadius="8px" bg="#999"></Box>
                <Box w="3px" h="3px" borderRadius="8px" bg="#999"></Box>
                <Box w="3px" h="3px" borderRadius="8px" bg="#999"></Box>
              </HStack>
            </Flex>
            <Flex flexDirection={{ base: "column", md: "row" }}>
              <Box flex="1" padding={formPadding}>
                <VStack spacing="10px" alignItems="start">
                  <Text fontSize="26px" color="#ea1d6f">
                    Get in touch
                  </Text>
                  <Box padding="20px">
                    <Text
                      color="#FFF"
                      fontWeight="500"
                      fontSize="16px"
                      mb="4"
                      textAlign="left"
                    >
                      Would you like to discuss a custom pastry order or have
                      any questions about my baking process? <br />
                      I'd love to hear from you! Don't hesitate to reach out
                      with the contact information below, or send a message
                      using the form.
                    </Text>
  
                    <HStack spacing={5}>
                      <a
                        href="https://www.tiktok.com/@juniatelles_?_t=8bokubqzewp&_r=1"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          size="lg"
                          style={{ color: "#ffffff" }}
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/juniatelles/?igshid=YmMyMTA2M2Y="
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          size="lg"
                          style={{ color: "#ffffff" }}
                        />
                      </a>
                    </HStack>
                  </Box>
                </VStack>
              </Box>
              <form ref={form} onSubmit={sendEmail}>
                <Box flex="1" padding={formPadding}>
                  <VStack spacing={formControlSpacing}>
                    <FormControl>
                      <Input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your name"
                        {...inputStyle}
                        isRequired
                      />
                    </FormControl>
                    <FormControl>
                      <Input
                        placeholder="Phone"
                        type="number"
                        name="phone"
                        {...inputStyle}
                        //isRequired
                      />
                    </FormControl>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        type="email"
                        name="email"
                        {...inputStyle}
                        isRequired
                      />
                    </FormControl>
                    <FormControl>
                      <Textarea
                        name="message"
                        placeholder="Messege"
                        {...inputStyle}
                        isRequired
                      />
                    </FormControl>
                    <HStack
                      justifyContent="space-around"
                      gap="10px"
                      spacing={10}
                    >
                      <Button
                        type="submit"
                        bg="#ffcbdb" // Cor de fundo rosa
                        boxShadow="2px 4px 6px rgba(0, 0, 0, 0.2)" // Sombra para efeito 3D
                        _hover={{ boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.3)" }} // Sombra maior no hover para affordance
                        _active={{
                          boxShadow: "inset 0 2px 2px rgba(0, 0, 0, 0.2)",
                        }} // Sombra interna ao clicar para dar sensação de pressionamento
                        color="black" // Cor do texto
                        // Disable the button if the form is being sent
                        isDisabled={isSending}
                      >
                        {/* Change the text of the button if the form is being sent */}
                        {isSending ? "Submitting..." : "Submit"}
                      </Button>
                    </HStack>
                  </VStack>
                </Box>
              </form>
            </Flex>
          </Box>
        </Flex>
        <Box position='absolute' bottom={{base:'-180px',md:'0px'}} width='100%' >
          <Footer/>
        </Box>
      </Box>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
