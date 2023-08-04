/* eslint-disable jsx-a11y/alt-text */
import { Image, GridItem } from "@chakra-ui/react";
import { Tilt } from "react-tilt";

const InteractiveImage = () => {
  return (
    <GridItem ml={6}>
     
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/food-dc0c9.appspot.com/o/picture_no_back-removebg-preview.png?alt=media&token=af6c063b-7fa9-46e7-afaf-6a4a64ef0f20"
          loading="eager"
          objectFit="cover"
        />
      
    </GridItem>
  );
};

export default InteractiveImage;
