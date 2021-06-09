import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Text, Flex, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { PostSnippetFragment, useVoteMutation } from "../generated/graphql";

interface VoteProps {
  post: PostSnippetFragment;
}
export const Vote: React.FC<VoteProps> = ({ post }) => {
  const [{}, vote] = useVoteMutation();
  const [loading, setLoading] =
    useState<"none" | "upvote" | "downvote">("none");
  return (
    <Flex direction="column" align="center" justify="center" mx={4}>
      <IconButton
        isLoading={loading === "upvote"}
        onClick={async () => {
          setLoading("upvote");
          await vote({ postId: post.id, value: 1 });
          setLoading("none");
        }}
        aria-label="Vote up"
        icon={<ChevronUpIcon w={6} h={6} />}
      />

      <Text>{post.points}</Text>
      <IconButton
        isLoading={loading === "downvote"}
        onClick={async () => {
          setLoading("downvote");
          await vote({ postId: post.id, value: -1 });
          setLoading("none");
        }}
        aria-label="Vote down"
        icon={<ChevronDownIcon w={6} h={6} />}
      />
    </Flex>
  );
};
