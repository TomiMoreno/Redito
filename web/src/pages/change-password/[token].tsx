import { Box, Button, Text, Flex, Link } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { NextPage } from "next";
import { withUrqlClient, WithUrqlProps } from "next-urql";
import { useRouter } from "next/router";
import React, { FunctionComponent, PropsWithChildren } from "react";
import { useState } from "react";
import { InputField } from "../../components/InputField";
import { Wrapper } from "../../components/Wrapper";
import { useChangePasswordMutation } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import toErrorMap from "../../utils/toErrorMap";
import NextLink from "next/link";

const ChangePassword: NextPage<{ token: string }> = ({ token }) => {
  const [, changePassword] = useChangePasswordMutation();
  const [tokenError, setTokenError] = useState("");
  const router = useRouter();
  return (
    <Wrapper variant="small">
      <Text fontSize="50px" textAlign="center">
        Change password
      </Text>

      <Formik
        initialValues={{ newPassword: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await changePassword({
            token,
            newPassword: values.newPassword,
          });
          console.log(response);
          if (response.data?.changePassword.errors) {
            const errors = toErrorMap(response.data.changePassword.errors);
            if (errors) {
              if ("token" in errors) {
                setTokenError(errors.token);
              }
              setErrors(errors);
            }
          } else if (response.data?.changePassword.user) {
            console.log(response);
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box mt={4}>
              <InputField
                name="newPassword"
                placeholder="New password"
                label="New password"
                type="password"
              />
            </Box>
            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              colorScheme="purple"
              mx="auto"
            >
              Change password
            </Button>
          </Form>
        )}
      </Formik>
      {tokenError && (
        <Flex mt={4} justifyContent="space-between" alignItems="center">
          <Text>
            {tokenError},{" "}
            <NextLink href="/forgot-password">
              <Link color="purple">go get a new one</Link>
            </NextLink>
          </Text>
        </Flex>
      )}
    </Wrapper>
  );
};

ChangePassword.getInitialProps = ({ query }) => {
  return {
    token: query.token as string,
  };
};

export default withUrqlClient(createUrqlClient)(
  ChangePassword as FunctionComponent<
    PropsWithChildren<WithUrqlProps | { token: string }>
  >
);
