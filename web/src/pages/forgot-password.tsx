import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { FormWrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
import { useForgotPasswordMutation } from "../generated/graphql";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { MinimalistNavBar } from "../components/NavBar";

export const ForgotPassword = () => {
  const [, forgotPassword] = useForgotPasswordMutation();
  const [emailExists, setEmailExists] = useState("");
  return (
    <FormWrapper>
      <MinimalistNavBar />
      <Text fontSize="50px" textAlign="center">
        Forgot password
      </Text>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={async (values) => {
          const response = await forgotPassword(values);
          if (response.data?.forgotPassword) {
            setEmailExists("An email has been sent");
          } else {
            setEmailExists(
              "The email doesn't belong to an existing user, try again"
            );
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name="email" placeholder="Email" label="Email" />

            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              colorScheme="purple"
            >
              Send email
            </Button>
            {emailExists && (
              <Text mt={4} color="purple">
                {emailExists}
              </Text>
            )}
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
export default withUrqlClient(createUrqlClient)(ForgotPassword);
