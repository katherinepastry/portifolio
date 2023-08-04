/* eslint-disable jsx-a11y/alt-text */
// DecorativeImage.tsx
import { Image, ImageProps } from "@chakra-ui/react";

interface DecorativeImageProps extends ImageProps {
  src: string;
}

const DecorativeImage: React.FC<DecorativeImageProps> = ({ src, ...rest }) => {
  return <Image src={src} {...rest} />;
};

export default DecorativeImage;
