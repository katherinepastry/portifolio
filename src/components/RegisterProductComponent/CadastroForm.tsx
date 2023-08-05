import {
  Box,
  FormControl,
  Input,
  Button,
  Textarea,
  Checkbox,
  CheckboxGroup,
  HStack,
  Avatar,
  AvatarBadge,
  Center,
  IconButton,
  Stack,
  InputGroup,
  InputRightElement,
  Progress,
  Flex,
} from "@chakra-ui/react";
import {
  useForm,
  useFieldArray,
  SubmitHandler,
} from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../lib/firebaseconfig";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { AddIcon, DeleteIcon, SmallCloseIcon } from "@chakra-ui/icons";
import NavigationBar from "../NavBarComponent/NavBarContainer";
import { BoxStyleCadastro, ListStyle, SubtituloDaPagina, TituloDaPagina } from "@/utils/styles";

type Inputs = {
  id: string;
  name: string;
  description: string;
  category: string[];
  image_url: string;
  ingredients: { id: string; value: string }[];
  method: { id: string; value: string }[];
};

export default function CadastroForm() {
  const [isUploading, setIsUploading] = useState(false);
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) router.push("/login");
  }, [loading, session, router]);

  const { register, handleSubmit, control } = useForm<Inputs>();
  const {
    fields: ingredientFields,
    append: appendIngredient,
    remove: removeIngredient,
  } = useFieldArray<Inputs>({
    control,
    name: "ingredients",
  });
  const {
    fields: methodFields,
    append: appendMethod,
    remove: removeMethod,
  } = useFieldArray<Inputs>({
    control,
    name: "method",
  });

  const formRef = useRef<HTMLFormElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files![0]);
    setAvatarUrl(URL.createObjectURL(event.target.files![0])); // set avatar url as soon as file is selected
  };
  const removeImage = () => {
    setFile(null);
    setAvatarUrl("");
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (file) {
      setIsUploading(true);
      const fileName = uuidv4() + file.name;
      const fileRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(fileRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Compute and update the progress
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          // Handle unsuccessful uploads
          console.log(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(fileRef);
          setAvatarUrl(downloadURL);
          const docRef = collection(db, "food");
          data.id = uuidv4();
          data.image_url = downloadURL;
          await addDoc(docRef, data);
          setIsUploading(false); // reset after successful upload
          setAvatarUrl(""); // reset avatar url after successful upload
          alert("Recipe Sucessfully Registered!");
          formRef.current?.reset();
        }
      );
    }
  };

  const onCancel = () => {
    formRef.current?.reset();
    setAvatarUrl(""); // also reset avatar url when cancel
  };
console.log(uploadProgress)
  return (
    <Box bg="linear-gradient(to right, #667eea, #764ba2)" overflow="hidden">
      <NavigationBar />
     
      <BoxStyleCadastro
        as="form"
        ref={formRef}
        id="product-form"
        onSubmit={handleSubmit(onSubmit)}
       
      >
        <TituloDaPagina>Product Registration</TituloDaPagina>
        <ListStyle>
          <FormControl id="userName">
            <SubtituloDaPagina>1. Upload product image:</SubtituloDaPagina>
            <Stack direction={["column", "row"]} spacing={6}>
              <Center>
                <Avatar size="xl" src={avatarUrl}>
                  <AvatarBadge
                    as={IconButton}
                    size="sm"
                    rounded="full"
                    top="-10px"
                    colorScheme="red"
                    aria-label="remove Image"
                    icon={<SmallCloseIcon />}
                    onClick={removeImage}
                  />
                </Avatar>
              </Center>
              <Center w="full">
                <InputGroup>
                  <Input type="file" onChange={onFileChange} />
                  <InputRightElement>
                    <Progress
                      value={uploadProgress}
                      size="xs"
                      isIndeterminate={isUploading}
                    />
                  </InputRightElement>
                </InputGroup>
              </Center>
            </Stack>
          </FormControl>
          <FormControl id="product-name" mb={6} isRequired>
            <SubtituloDaPagina>2. Product Name:</SubtituloDaPagina>
            <Input
              {...register("name")}
              borderRadius="8px"
              placeholder="Name"
              variant="filled"
            />
          </FormControl>
          <FormControl mb={6} isRequired>
            <SubtituloDaPagina>3. Description</SubtituloDaPagina>
            <Textarea
              {...register("description")}
              borderRadius="8px"
              placeholder="Description"
              variant="filled"
            />
          </FormControl>
          <FormControl mb={6}>
            <SubtituloDaPagina>4. Product Categories:</SubtituloDaPagina>
            <CheckboxGroup colorScheme="red">
              <HStack spacing="24px">
                <Checkbox {...register("category")} value="Vegan">
                  Vegan
                </Checkbox>
                <Checkbox {...register("category")} value="Gluten Free">
                  Gluten Free
                </Checkbox>
                <Checkbox {...register("category")} value="Salt">
                  Salt
                </Checkbox>
                <Checkbox {...register("category")} value="Sweet">
                Sweet
                </Checkbox>
              </HStack>
            </CheckboxGroup>
          </FormControl>
          <FormControl
            mb={6}
            isRequired
            display="flex"
            flexDirection="column"
            gap={6}
          >
            <SubtituloDaPagina>5. Ingredients</SubtituloDaPagina>
            {ingredientFields.map((item, index) => (
              <Flex key={item.id} align="center" justify="space-between" mb={2}>
                <Input
                  {...register(`ingredients.${index}.value`)}
                  defaultValue={item.value}
                  variant="filled"
                  placeholder="Write here your Ingredient"
                />
                <IconButton
                  aria-label="Remove Ingredient"
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  ml={2}
                  onClick={() => removeIngredient(index)}
                />
              </Flex>
            ))}
            <Button
              leftIcon={<AddIcon />}
              colorScheme="pink"
              variant="solid"
              onClick={() => appendIngredient({ id: uuidv4(), value: "" })}
            >
              Add Ingredient
            </Button>
            <SubtituloDaPagina>6. Ingredients</SubtituloDaPagina>
            {methodFields.map((item, index) => (
              <Flex key={item.id} align="center" justify="space-between" mb={2}>
                <Input
                  {...register(`method.${index}.value`)}
                  defaultValue={item.value}
                  variant="filled"
                  placeholder="Write here your Method"
                />
                <IconButton
                  aria-label="Remove Method"
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  ml={2}
                  onClick={() => removeMethod(index)}
                />
              </Flex>
            ))}
            <Button
              leftIcon={<AddIcon />}
              colorScheme="purple"
              variant="solid"
              onClick={() => appendMethod({ id: uuidv4(), value: "" })}
            >
              Add Method
            </Button>
          </FormControl>
        </ListStyle>
        <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
          <Button
            onClick={onCancel}
            borderRadius={6}
            boxShadow="lg"
            colorScheme="red"
            p={4}
            color="white"
          >
            Cancel submit and clear form
          </Button>
          <Button
            borderRadius={6}
            boxShadow="lg"
            colorScheme="blue"
            p={4}
            color="white"
            type="submit"
            isLoading={isUploading}
            loadingText="Sending..."
          >
            Send data and register product
          </Button>
        </Stack>
        <Link href="/UpdateProduct">
          <Button
          mt={6}
            borderRadius={6}
            _hover={{ opacity: 0.8 }}
            _active={{ transform: "scale(0.9)" }}
            boxShadow="lg"
            colorScheme="yellow"
            p={4}
            color="black"
         
          >
            Go to Update/Delete page
          </Button>
        </Link>
      </BoxStyleCadastro>
    </Box>
  );
}
