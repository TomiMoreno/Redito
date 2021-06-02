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
import { useState } from "react";

const Index = () => {
  const [variables, setVariables] = useState({
    limit: 10,
    cursor: null as string | null,
  });
  const [{ data, fetching, stale }] = usePostsQuery({
    variables,
  });
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
                data.posts.posts.map((p) => (
                  <Box key={p.id} p={5} shadow="md" borderWidth="1px">
                    <Heading fontSize="xl">{p.title}</Heading>
                    <Text mt={4}>{p.reducedBody}</Text>
                  </Box>
                ))}
            </Stack>
          )}
          {data && data?.posts.hasMore && (
            <Button
              my={4}
              colorScheme="purple"
              w="min-content"
              isLoading={stale}
              onClick={() =>
                setVariables({
                  limit: variables.limit,
                  cursor:
                    data.posts.posts[data.posts.posts.length - 1]?.createdAt,
                })
              }
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
