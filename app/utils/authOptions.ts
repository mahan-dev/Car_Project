import { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDb, verifyPassword } from "@/app/utils/auth";
import { UserModel } from "@/models/user";

interface UserCredentials {
  email: string;
  password: string;
}

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60, // 1 day
  },

  providers: [
    CredentialsProvider({
      credentials: {},
      authorize: async (credentials: UserCredentials): Promise<User | null> => {
        const { email, password } = credentials;

        try {
          await connectDb();
        } catch {
          throw new Error("Failed to connect to database");
        }

        if (!email || !password) {
          throw new Error("لطفا اطلاعات خواسته شده را وارد کنید");
        }
        const user = await UserModel.findOne({ email });
        if (!user) {
          throw new Error("لطفا ابتدا ثبت نام کنید");
        }
        const isValid = await verifyPassword(password, user.password);
        if (!isValid) {
          throw new Error("ایمیل یا رمز عبور اشتباه است");
        }
        return {
          id: user._id.toString(),
          email: user.email,
        };
      },
    }),
  ],
};
