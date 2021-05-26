export const createFieldError = (field: string, message: string) => ({
  errors: [
    {
      field,
      message,
    },
  ],
});
