// Vitest replaces this function. Tests never send real email.
export const actions = {
  contact: async (_input: FormData): Promise<{ error?: { message: string }; data?: { sent: boolean } }> => {
    void _input;
    throw new Error("Mock the contact action before submitting the form.");
  },
};
