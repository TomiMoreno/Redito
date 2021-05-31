import { Box, Center } from "@chakra-ui/layout";
import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";

interface WrapperProps {
  isLoading?: boolean;
}
export const FormWrapper: React.FC<WrapperProps> = ({
  children,
  isLoading,
}) => {
  return (
    <Flex w="full" align="center" justifyContent="center" h="100vh">
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        width="600px"
      >
        {isLoading ? (
          <Center>
            <Spinner
              colorScheme="purple"
              size="xl"
              thickness="4px"
              color="purple.500"
            />
          </Center>
        ) : (
          children
        )}
      </Box>
    </Flex>
  );
};
