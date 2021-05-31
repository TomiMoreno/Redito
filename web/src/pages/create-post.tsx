import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import router from "next/router";
import React from "react";
import { InputField } from "../components/InputField";
import { Layout } from "../components/Layout";
import { FormWrapper } from "../components/Wrapper";
import { useCreatePostMutation } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useIsAuth } from "../utils/useIsAuth";

export const CreatePost: React.FC = () => {
  const { fetching } = useIsAuth();
  const [, createPost] = useCreatePostMutation();
  return (
    <Layout>
      <FormWrapper isLoading={fetching}>
        <Box>
          <Heading textAlign="center">Create Post</Heading>
        </Box>
        <Formik
          initialValues={{ title: "", body: "" }}
          onSubmit={async (values) => {
            const response = await createPost({ options: values });
            if (!response.error) {
              router.push("/");
            }
            console.log(response.error);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField name="title" placeholder="Title" label="Title" />
              <Box mt={4}>
                <InputField
                  textarea
                  name="body"
                  placeholder="Body"
                  label="Body"
                />
              </Box>
              <Flex mt={4} justifyContent="space-evenly" alignItems="center">
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  colorScheme="purple"
                >
                  Create
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(CreatePost);
