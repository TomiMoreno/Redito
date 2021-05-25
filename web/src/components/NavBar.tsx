import { Box, Link, Flex, Text, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { useMeQuery } from "../generated/graphql";

interface NavBarProps {}
export const NavBar: React.FC<NavBarProps> = () => {
  const [{ data, fetching }] = useMeQuery();
  let body = null;
  if (fetching) {
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link color="white" mr={4}>
            {" "}
            Login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link color="white">Register</Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <>
        <Box>{data?.me?.username}</Box>
        <Button ml={5} onClick={() => {}}>
          Logout
        </Button>
      </>
    );
  }
  return (
    <Flex
      bg="purple"
      alignItems="center"
      justifyContent="flex-end"
      flexDirection="row"
      p={4}
    >
      {body}
    </Flex>
  );
};
