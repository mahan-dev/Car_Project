import { UserModel } from "@/core/models/user";
import { hashPassword, verifyPassword } from "@/core/utils/auth";
import { authOptions } from "@/core/utils/authOptions";
import { connectDb } from "@/core/utils/connectDb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

interface PostProps {
  password: string;
  newPassword: string;
}

export const POST = async (req: Request) => {
  try {
    await connectDb();
    console.log("hi1");
    const res: PostProps = await req.json();
    const { password, newPassword } = res;

    console.log(password, newPassword);

    const session = await getServerSession(authOptions);
    if (!session)
      return NextResponse.json(
        {
          status: "Failed",
          error: "Please login first",
        },
        { status: 401 }
      );

    const email = session.user.email;
    const user = await UserModel.findOne({ email });

    if (!user)
      return NextResponse.json(
        { status: "Failed", error: "account not found" },
        { status: 404 }
      );

    const isPassword = await verifyPassword(password, user.password);
    if (!isPassword)
      return NextResponse.json(
        {
          status: "Failed",
          error: "Incorrect Password",
        },
        { status: 422 }
      );

    user.password = await hashPassword(newPassword);
    await user.save();

    return NextResponse.json(
      {
        status: "Success",
        message: "Updated",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { status: "Failed", error: "Database error" },
      { status: 500 }
    );
  }
};
