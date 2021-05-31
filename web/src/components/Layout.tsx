import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { NavBar } from "./NavBar";
import { FormWrapper } from "./Wrapper";

interface LayoutProps {}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex w="full" minH="100vh" direction="column">
      <NavBar />
      {children}
    </Flex>
  );
};
