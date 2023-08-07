import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Box
} from '@chakra-ui/react'
import {faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signIn, useSession } from "next-auth/react";
import Link from 'next/link';
import { useRouter } from "next/router"
import { FormEvent, useState } from "react"

export default function LoginPage() {
    const router = useRouter()
    const [error, setError] = useState<string | null>(null);
    const { status } = useSession();
    const loading = status === "loading";
  
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      const target = e.target as typeof e.target & {
        username: { value: string };
        password: { value: string };
      };
  
      const username = target.username.value!;
      const password = target.password.value!;
  
      const response = await signIn("credentials", {
        redirect: false,
        username,
        password
      });
  
      if (response?.error) {
        setError("The credentials are wrong, please try again!");
      } else {
        setError(null);
        // redirecionar para '/another-page' após o login bem-sucedido
        router.push('/RegistrationProduct');
      }
    };
  
  return (
    <Stack bg="gray.700" minH={'100vh'} direction={{ base: 'column', md: 'row' }} color='#FFFFFF'  >
       <Box position='absolute' top='-5px' left='10px'>
      <Link href="/">
        <Button
         borderRadius={6}
          _hover={{ opacity: 0.8 }}
          _active={{ transform: "scale(0.9)" }}
          boxShadow="lg"
          colorScheme="facebook"
          p={4}
          mt={6}
          color="white"
          leftIcon={<FontAwesomeIcon icon={faLeftLong} />}
        >
          Back to Home
        </Button>
      </Link>
      </Box>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        
        <Stack spacing={4} w={'full'} maxW={'md'} as='form' onSubmit={handleSubmit}>
          <Heading variant='h1' fontSize="3xl" fontFamily='helvetica' mb={6}>Sign in </Heading>
          <FormControl id="text">
            <FormLabel  variant='h1' fontSize="2xl" fontFamily='helvetica'>Username</FormLabel>
            <Input name="username" type="text" required  />
          </FormControl>
          <FormControl id="password">
            <FormLabel variant='h1' fontSize="2xl" fontFamily='helvetica' >Password</FormLabel>
            <Input name="password" type="password" required  />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              alignItems='baseline'
              justify={'space-between'}>
              
              
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'}  borderRadius="full"
                _hover={{ opacity: 0.8 }}
                _active={{ transform: "scale(0.9)" }}
                boxShadow="lg" type='submit'>
              Login
            </Button>
          </Stack>
          {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
        </Stack>
       

      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit='cover'
          src={
            'https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/cake.jpeg?alt=media&token=b8df5ca7-95c3-4ded-bd60-7fecdc6e840a'
          }
        />
      </Flex>
    </Stack>
  )
}
