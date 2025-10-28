import { NextResponse } from "next/server";

import { hashPassword } from "@/utils/auth";
import { authForm } from "@/templates/interface/authForm";
import { UserModel } from "@/models/user";
import { connectDb } from "@/utils/connectDb";

export const POST = async (req: Request) => {
  try {
    await connectDb();

    const { email, password } = (await req.json()) as authForm;

    const user = await UserModel.findOne({ email });
    if (user)
      return NextResponse.json(
        { status: "Failed", error: "This user exists" },
        { status: 422 }
      );

    const passwordHashing = await hashPassword(password);

    const newUser = UserModel.create({
      email,
      password: passwordHashing,
    });

    return NextResponse.json(
      {
        status: "Success",
        message: "successfully done",
        data: newUser,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        status: "Failed",
        error: "Server side error",
      },
      { status: 500 }
    );
  }
};
