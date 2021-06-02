import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { usePostsQuery } from "../generated/graphql";
import { Layout } from "../components/Layout";
import NextLink from "next/link";
import {
  Button,
  Stack,
  Heading,
  Box,
  Text,
  Center,
  Flex,
  Spinner,
} from "@chakra-ui/react";

const Index = () => {
  const [{ data, fetching }] = usePostsQuery({
    variables: {
      limit: 3,
    },
  });
  const paginate = () => {
    data;
  };
  return (
    <Layout>
      <Center p={8}>
        <Flex maxW="600px" align="center" direction="column">
          <NextLink href="/create-post">
            <Button colorScheme="purple" width="min-content">
              Create post
            </Button>
          </NextLink>
          {!data && fetching ? (
            <Spinner size="xl" thickness="4px" color="purple.500" />
          ) : (
            <Stack my={4} spacing={8}>
              {data &&
                data.posts.map((p) => (
                  <Box key={p.id} p={5} shadow="md" borderWidth="1px">
                    <Heading fontSize="xl">{p.title}</Heading>
                    <Text mt={4}>{p.reducedBody}</Text>
                  </Box>
                ))}
            </Stack>
          )}
          {data && (
            <Button
              my={4}
              colorScheme="purple"
              w="min-content"
              onClick={paginate}
            >
              Load more
            </Button>
          )}
        </Flex>
      </Center>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
