import { Box, Button, Flex, Heading, Link, Text} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../components/InputField";
import { FormWrapper } from "../components/Wrapper";
import { useLoginMutation } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import toErrorMap from "../utils/toErrorMap";
import { MinimalistNavBar } from "../components/NavBar";

export const Login = () => {
  const [{}, login] = useLoginMutation();
  const router = useRouter();
  return (
    <FormWrapper>
      <MinimalistNavBar /> 
      <Box>
        <Heading fontSize="50px" textAlign="center">
          Login
        </Heading>
      </Box>
      <Formik
        initialValues={{ usernameOrEmail: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await login(values);
          if (response.data?.login.errors) {
            const errors = toErrorMap(response.data.login.errors);
            setErrors(errors);
          } else if (response.data?.login.user) {
            console.log(typeof router.query.next);
            if (typeof router.query.next === "string") {
              router.push(router.query.next);
            } else {
              router.push("/");
            }
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="usernameOrEmail"
              placeholder="Username or email"
              label="Username or email"
            />
            <Box mt={4}>
              <InputField
                name="password"
                placeholder="Password"
                label="Password"
                type="password"
              />
            </Box>
            <Flex mt={4} justifyContent="flex-end" alignItems="center">
              <NextLink href="/forgot-password">
                <Link color="purple">Forgot password?</Link>
              </NextLink>
            </Flex>
            <Flex mt={4} justifyContent="space-evenly" alignItems="center">
              <Button
                type="submit"
                isLoading={isSubmitting}
                colorScheme="purple"
              >
                Login
              </Button>
              <Text>
                Don't have an account? {" "}
                <NextLink href="register">
                  <Link color="purple">Register now</Link>
                </NextLink>
              </Text>
            </Flex>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
export default withUrqlClient(createUrqlClient)(Login);
