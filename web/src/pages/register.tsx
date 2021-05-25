import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
import { useRegisterMutation } from "../generated/graphql";
import toErrorMap from "../utils/toErrorMap";
import { useRouter } from "next/router";

interface registerProps {}

export const Register: React.FC<registerProps> = () => {
  const [{}, register] = useRegisterMutation();
  const router = useRouter();
  return (
    <Wrapper variant="small">
      <Text fontSize="50px" textAlign="center">
        Register
      </Text>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await register(values);
          if (response.data?.register.errors) {
            const errors = toErrorMap(response.data.register.errors);
            setErrors(errors);
          } else if (response.data?.register.user) {
            router.push("/");
          }
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
                name="password"
                placeholder="Password"
                label="Password"
                type="password"
              />
            </Box>

            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              colorScheme="purple"
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};
export default Register;
