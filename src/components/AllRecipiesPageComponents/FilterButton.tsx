// FilterButton.tsx
import { Button, useColorModeValue } from "@chakra-ui/react";

interface FilterButtonProps {
  filter: string;
  isActive: boolean;
  style: { backgroundColor: string; color: string };
  handleFilterClick: (filter: string) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  filter,
  isActive,
  style,
  handleFilterClick,
}) => {
  const bgColor = useColorModeValue("gray.200", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Button
      onClick={() => handleFilterClick(filter)}
      borderRadius="full"
      _hover={{ opacity: 0.8 }}
      _active={{ transform: "scale(0.9)" }}
      boxShadow="lg"
      p={4}
      bg={isActive ? style.backgroundColor : bgColor}
      color={isActive ? style.color : color}
    >
      {filter}
    </Button>
  )
};

export default FilterButton;
