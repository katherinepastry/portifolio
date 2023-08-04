// ClearFiltersButton.tsx
import { Button } from "@chakra-ui/react";

interface ClearFiltersButtonProps {
  handleClearFilters: () => void;
}

const ClearFiltersButton: React.FC<ClearFiltersButtonProps> = ({ handleClearFilters }) => (
  <Button
    mt={2}
    onClick={handleClearFilters}
    borderRadius="full"
    p={4}
    bg="#FF6793"
    color="white"
    _hover={{ opacity: 0.8 }}
    _active={{ transform: "scale(0.9)" }}
    boxShadow="lg"
  >
    Clear Filters
  </Button>
);

export default ClearFiltersButton;
