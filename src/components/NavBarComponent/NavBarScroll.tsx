import {Flex, Image, Link, Spacer, useBreakpointValue } from "@chakra-ui/react";
import { usePathname } from 'next/navigation'
import { navLinks } from "../../utils/constants";

interface NavLink {
  id: string;
  title: string;
}

export default function NavbarScroll () {
  const pathname = usePathname()
  const id = pathname.split('/').pop()
  
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  const renderNavLinks = (links: NavLink[]) => {
    return links.map((item, _index) => (
      <Link
        key={item.id}
        mx={isLargeScreen ? 4 : 0}
        py={!isLargeScreen ? 2 : undefined}
        color="neutral400"
        fontSize={{ base: "sm", md: "md" }}
        href={id === "AllRecipesPage"|| "Recipes" || "About" ||"Contact" ? `/#${item.id}` : `#${item.id}`}
        _hover={{ textDecoration: "none" }}
        mt={4}
      >
        {item.title}
      </Link>
    ));
  };

  const leftNavLinks = navLinks.slice(0, 2);
  const rightNavLinks = navLinks.slice(2);

  return (
    <Flex alignItems='center'
    justifyContent='center'
    margin='0 auto'
    h='88px'
    maxW='full'
    px={{ base: "4", md: "8" }}
    >
      {renderNavLinks(leftNavLinks)}
      <Spacer />
      
        <Image
        mt={12}
          src="https://firebasestorage.googleapis.com/v0/b/food-dc0c9.appspot.com/o/logocupcake.png?alt=media&token=50c0fdb0-f432-4e2b-a79b-93b459bfaab9"
          boxSize={{ base: "100px", md: "100px" }}
          objectFit="contain"
          alt="Logo"
          zIndex={1000}
        />
     
      <Spacer />
      {renderNavLinks(rightNavLinks)}
    </Flex>
  );
};
