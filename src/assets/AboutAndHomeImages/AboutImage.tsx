import { Image, GridItem } from "@chakra-ui/react";


export default function AboutInteractiveImage () {
  return (
    <GridItem>
     
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/geradorimagens-27342.appspot.com/o/bolo.png?alt=media&token=a82b6587-ea1e-4edc-a4a4-abcde1fdfac4"
          loading="eager"
          srcSet="https://firebasestorage.googleapis.com/v0/b/geradorimagens-27342.appspot.com/o/bolo.png?alt=media&token=a82b6587-ea1e-4edc-a4a4-abcde1fdfac4 500w, https://firebasestorage.googleapis.com/v0/b/geradorimagens-27342.appspot.com/o/bolo.png?alt=media&token=a82b6587-ea1e-4edc-a4a4-abcde1fdfac4 767w"
          sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 700px, 507px"
          alt="bakery cake"
          objectFit="cover"
        />
     
    </GridItem>
  );
};


