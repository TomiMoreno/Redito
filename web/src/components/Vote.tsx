import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Text, Flex, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { PostSnippetFragment, useVoteMutation } from "../generated/graphql";

interface VoteProps {
  post: PostSnippetFragment;
}
export const Vote: React.FC<VoteProps> = ({ post }) => {
  const [, vote] = useVoteMutation();
  const [loading, setLoading] =
    useState<"none" | "upvote" | "downvote">("none");
  return (
    <Flex direction="column" align="center" justify="center" mx={4}>
      <IconButton
        isLoading={loading === "upvote"}
        onClick={async () => {
          setLoading("upvote");
          const voteValue = post.voteStatus !== 1 ? 1 : 0;
          await vote({ postId: post.id, value: voteValue });
          setLoading("none");
        }}
        aria-label="Vote up"
        icon={<ChevronUpIcon w={6} h={6} />}
        colorScheme={post.voteStatus === 1 ? "purple" : undefined}
      />

      <Text>{post.points}</Text>
      <IconButton
        isLoading={loading === "downvote"}
        onClick={async () => {
          setLoading("downvote");
          const voteValue = post.voteStatus !== -1 ? -1 : 0;
          await vote({ postId: post.id, value: voteValue });
          setLoading("none");
        }}
        aria-label="Vote down"
        colorScheme={post.voteStatus === -1 ? "purple" : undefined}
        icon={<ChevronDownIcon w={6} h={6} />}
      />
    </Flex>
  );
};
