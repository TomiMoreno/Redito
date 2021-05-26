import { UsernamePasswordInput } from "../resolvers/UsernamePasswordInput";

export const validateRegister = (options: UsernamePasswordInput) => {
  if (options.username.length <= 2) {
    return [
      {
        field: "username",
        message: "Username length must be greater than 2",
      },
    ];
  }
  if (!options.email.includes("@")) {
    return [
      {
        field: "email",
        message: "Not valid email",
      },
    ];
  }
  if (options.username.includes("@")) {
    return [
      {
        field: "username",
        message: "Username can't contain @",
      },
    ];
  }
  if (options.password.length <= 5) {
    return [
      {
        field: "password",
        message: "Password length must be greater than 5",
      },
    ];
  }
  return null;
};
