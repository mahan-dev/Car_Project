import { compare, hash } from "bcryptjs";



export const verifyPassword = async (
  password: string,
  hashedPassword: string
) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

export const hashPassword = async (hashPassword: string) => {
  const hashedPassword = await hash(hashPassword, 10);
  return hashedPassword;
};
