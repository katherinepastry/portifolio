/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  ButtonGroup,
  Center,
  Checkbox,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Progress,
  Select,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseconfig";
import { UseProductContext, Product } from "@/context/context";
import { collection, getDocs } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { Image } from "@chakra-ui/react";
import {
  BoxStyleCadastro,
  TituloDaPagina,
  ListStyle,
  SubtituloDaPagina,
} from "@/utils/styles";
import { SmallCloseIcon } from "@chakra-ui/icons";
import NavigationBar from "../NavBarComponent/NavBarContainer";

export default function UpdateForm() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [Product, setProductArray] = useState<Product[]>([]);
  const [searchId, setSearchId] = useState<string>("");
  const { register, setValue, handleSubmit, reset } = useForm<Product>();
  const [categories, setCategories] = useState<string[]>([]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const allCategories = ["Vegan", "Gluten Free", "Salt", "Sweet"];

  useEffect(() => {
    async function getProducts() {
      const productsCol = collection(db, "food");
      const productSnapshot = await getDocs(productsCol);
      const products = productSnapshot.docs.map((doc) => ({
        id: doc.id, // ID do documento Firestore
        name: doc.data().name,
        description: doc.data().description,
        image_url: doc.data().image_url,
        category: doc.data().category,
        ingredients: doc.data().ingredients,
        method: doc.data().method,
      }));
      setProductArray(products);
    }
    getProducts();
  }, [selectedProduct]);

  const fillFormWithProductData = (id: string) => {
    if (!id) return;
    const product = Product.find((item) => item.id === id);
    setSelectedProduct(product!);

    if (product) {
      Object.entries(product).forEach(([key, value]) => {
        if (key === "category") {
          setCategories(value);
        } else {
          setValue(key as keyof Product, value);
        }
      });
    } else {
      console.log(`Could not find product with id "${id}"`);
    }
  };
  const handleCategoryChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    category: string
  ) => {
    if (e.target.checked) {
      setCategories((prevState) => [...prevState, category]);
    } else {
      setCategories((prevState) => prevState.filter((cat) => cat !== category));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setImageFile(e.target.files[0]);
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  useEffect(() => {
    fillFormWithProductData(searchId);
  }, [searchId]);

  const handleSearchIdChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSearchId(event.target.value);
  };

  const onSubmit = async (data: Product) => {
    setLoading(true);
    let imageUrl = selectedProduct?.image_url;

    if (imageFile) {
      const storage = getStorage();
      const storageRef = ref(storage, "images/" + imageFile.name);

      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      // Listen for state changes, errors, and completion of the upload.
      await new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
          },
          (error) => {
            console.error(error);
            reject(error);
          },
          () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              imageUrl = downloadURL;
              resolve(null);
            });
          }
        );
      });
    }

    try {
      if (!searchId) return;
      const docRef = doc(db, "food", searchId);
      await updateDoc(docRef, {
        name: data.name!,
        description: data.description!,
        image_url: imageUrl!,
        category: categories!,
        // "planificar" arrays de objetos
        ingredients: data.ingredients.map((ing) => ing.value!),
        method: data.method.map((met) => met.value!),
      }).then(() => {
        alert("The Document was has been successfully updated");
        setSelectedProduct(null); // Resetando o professor selecionado
        reset(); // Resetando o form
      });
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  };

  
  const onDeleteProfessor = async () => {
    if (!selectedProduct) {
      return;
    }
    try {
      const produtodeletado = Product.find(
        (item) => item.name === selectedProduct.name
      );
      if (window.confirm("Are you sure you want to delete this product?")) {
        const docRef = doc(db, "food", produtodeletado!.id);
        await deleteDoc(docRef);
        alert("Product deleted successfully!");
        setSelectedProduct(null); // Resetando o professor selecionado
        reset(); // Resetando o form
      }
      
    } catch(err){
      console.log(err)
    }
  } 

  return (
    <Box bg="linear-gradient(to right, #667eea, #764ba2)" overflow="hidden">
      <NavigationBar /> {/* Insira o seu NavigationBar aqui */}
      <Box position="absolute" top="6" right="10">
        <Link href="/">
          <Button
            borderRadius={6}
            _hover={{ opacity: 0.8 }}
            _active={{ transform: "scale(0.9)" }}
            boxShadow="lg"
            colorScheme="red"
            p={4}
            color="white"
            rightIcon={<SmallCloseIcon />}
          >
            Logout
          </Button>
        </Link>
      </Box>
      <BoxStyleCadastro as="form" onSubmit={handleSubmit(onSubmit)}>
        <TituloDaPagina>Product Update</TituloDaPagina>
        <ListStyle>
          <FormControl id="searchId" mb={6}>
            <SubtituloDaPagina>1. Select Product:</SubtituloDaPagina>
            <Select
              border="2px solid black"
              textAlign="center"
              value={searchId}
              onChange={handleSearchIdChange}
            >
              <option>-</option>
              {Product.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                  
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl id="image">
            <SubtituloDaPagina>2. Upload Product Image:</SubtituloDaPagina>
            <Stack direction={"column"} spacing={6}>
              <Center>
                <Avatar
                  size="xl"
                  src={previewImage || selectedProduct?.image_url || ""}
                >
                
                </Avatar>
              </Center>
              <Center w="full">
                <InputGroup>
                  <Input
                    variant="filled"
                    textAlign="center"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </InputGroup>
              </Center>
            </Stack>
          </FormControl>
          <FormControl id="name">
            <SubtituloDaPagina>2. Product Name</SubtituloDaPagina>
            <Input
              variant="filled"
              type="text"
              textAlign="center"
              {...register("name")}
            />
          </FormControl>
          <FormControl id="description">
            <SubtituloDaPagina>3. Product Description</SubtituloDaPagina>
            <Input
              variant="filled"
              type="text"
              textAlign="center"
              {...register("description")}
            />
          </FormControl>
          <FormControl id="category" mb={6} mt={6}>
            <SubtituloDaPagina>4. Product category</SubtituloDaPagina>
            {allCategories.map((cat) => (
              <Checkbox
                key={cat}
                isChecked={categories.includes(cat)}
                onChange={(e) => handleCategoryChange(e, cat)}
              >
                {cat}
              </Checkbox>
            ))}
          </FormControl>
          <FormControl id="ingredient">
            <SubtituloDaPagina>5. Ingredients</SubtituloDaPagina>
            {selectedProduct?.ingredients.map((ingredient, index) => (
              <Input
                textAlign="center"
                mb={3}
                type="text"
                key={index}
                defaultValue={ingredient.toString()}
                {...register(`ingredients.${index}.value`)}
                variant="filled"
              />
            ))}
          </FormControl>

          <FormControl id="method" mb={6}>
            <SubtituloDaPagina>6. method</SubtituloDaPagina>
            {selectedProduct?.method.map((method, index) => (
              <Input
                variant="filled"
                textAlign="center"
                mb={3}
                type="text"
                key={index}
                defaultValue={method.toString()}
                {...register(`method.${index}.value`)}
              />
            ))}
          </FormControl>

          {loading && <div>Load Data...</div>}
          <ButtonGroup gap='4' display='flex' alignContent='center' alignItems='center'>
          <Button type="submit" colorScheme="blue" disabled={loading}>
            {loading ? "sending data..." : "Update data"}
          </Button>
          <Button
            colorScheme="red"
            color='white'
           
          
            disabled={!selectedProduct} 
            onClick={onDeleteProfessor}
          >
            Delete data
          </Button>
          </ButtonGroup>
        </ListStyle>
        <Link href="/RegistrationProduct">
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
            Back to Registration
          </Button>
        </Link>
      </BoxStyleCadastro>
      
    </Box>
  );
}
