import { Button, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { isServer } from "../utils/isServer";
import { DarkModeSwitch } from "./DarkModeSwitch";

interface NavBarProps {}
export const NavBar: React.FC<NavBarProps> = () => {
  const [{ data, fetching }] = useMeQuery({
    pause: isServer(),
  });
  const [{ fetching: loggingOut }, logout] = useLogoutMutation();
  let body = null;
  if (fetching) {
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link mr={4}>Login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link mr={4}>Register</Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <>
        <Text>{data?.me?.username}</Text>
        <Button
          mx={5}
          onClick={() => {
            logout();
          }}
          isLoading={loggingOut}
        >
          Logout
        </Button>
      </>
    );
  }
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      flexDirection="row"
      p={4}
      w="full"
      position="sticky"
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
      mb={4}
    >
      <Text
        fontFamily={"heading"}
        color={useColorModeValue("gray.800", "white")}
      >
        Redito
      </Text>
      <Flex align="center" justify="center">
        {body}
        <DarkModeSwitch />
      </Flex>
    </Flex>
  );
};
