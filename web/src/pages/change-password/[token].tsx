import { Box, Button, Text, Flex, Link } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { NextPage } from "next";
import { withUrqlClient, WithUrqlProps } from "next-urql";
import { useRouter } from "next/router";
import React, { FunctionComponent, PropsWithChildren } from "react";
import { useState } from "react";
import { InputField } from "../../components/InputField";
import { FormWrapper } from "../../components/Wrapper";
import { useChangePasswordMutation } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import toErrorMap from "../../utils/toErrorMap";
import NextLink from "next/link";
import { DarkModeSwitch } from "../../components/DarkModeSwitch";

const ChangePassword: NextPage<{ token: string }> = ({}) => {
  const [, changePassword] = useChangePasswordMutation();
  const [tokenError, setTokenError] = useState("");
  const router = useRouter();
  const { token } = router.query;
  return (
    <FormWrapper>
      <DarkModeSwitch isFixed />
      <Text fontSize="50px" textAlign="center">
        Change password
      </Text>

      <Formik
        initialValues={{ newPassword: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await changePassword({
            token: typeof token === "string" ? token : "",
            newPassword: values.newPassword,
          });
          if (response.data?.changePassword.errors) {
            const errors = toErrorMap(response.data.changePassword.errors);
            if (errors) {
              if ("token" in errors) {
                setTokenError(errors.token);
              }
              setErrors(errors);
            }
          } else if (response.data?.changePassword.user) {
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
    </FormWrapper>
  );
};

export default withUrqlClient(createUrqlClient)(
  ChangePassword as FunctionComponent<
    PropsWithChildren<WithUrqlProps | { token: string }>
  >
);
