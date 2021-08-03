import React from "react";
import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from 'next/link';
import { Formik, Form } from "formik";
import { FormWrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
import { useRegisterMutation } from "../generated/graphql";
import toErrorMap from "../utils/toErrorMap";
import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { MinimalistNavBar } from "../components/NavBar";

interface registerProps {}

export const Register: React.FC<registerProps> = () => {
  const [{}, register] = useRegisterMutation();
  const router = useRouter();
  return (
    <FormWrapper>
      <MinimalistNavBar />
      <Text fontSize="50px" textAlign="center">
        Register
      </Text>
      <Formik
        initialValues={{ username: "", password: "", email: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await register({ options: values });
          if (response.data?.register.errors) {
            const errors = toErrorMap(response.data.register.errors);
            setErrors(errors);
          } else if (response.data?.register.user) {
            router.push("/");
          }
        }}
        validate={(values ) => {
          const errors = {username: '', password: '', email: ''};
          if (values.username.length < 3) {
            errors.username = "Username length must be greater than 2"
          }else if(values.username.includes('@')){
            errors.username = "Username cannot contain an @ symbol"
          } else if (values.password.length < 6) {
            errors.password = "Password length must be greater than 5"
          } else if (!values.email) {
            errors.email = "Email is required"
          }
          
          return errors;
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              placeholder="Username"
              label="Username"
            />
            <Box mt={4}>
              <InputField
                name="email"
                placeholder="Email"
                label="Email"
                inputMode="email"
              />
            </Box>
            <Box mt={4}>
              <InputField
                name="password"
                placeholder="Password"
                label="Password"
                type="password"
              />
            </Box>
            <Flex mt={4} justifyContent="space-evenly" alignItems="center" flexWrap="wrap">

              <Button
                type="submit"
                isLoading={isSubmitting}
                colorScheme="purple"
              >
                Register
              </Button>
                <Text>
                  Already have an account? {" "}
                  <NextLink href="/login">
                    <Link color="purple">Log in</Link>
                  </NextLink>
                </Text>
            </Flex>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
export default withUrqlClient(createUrqlClient)(Register);
