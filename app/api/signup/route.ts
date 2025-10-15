import { NextResponse } from "next/server";

import { connectDb, hashPassword } from "@/utils/auth";
import { authForm } from "@/templates/interface/authForm";
import { UserModel } from "@/models/user";

export const POST = async (req: Request) => {
  try {
    await connectDb();

    const { email, password } = (await req.json()) as authForm;

    const user = await UserModel.findOne({ email });
    if (user)
      return NextResponse.json(
        { status: "حساب کاربری وجود دارد" },
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
        message: "با موفیت انجام شد",
        data: newUser,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        status: "Failed",
        error: "مشکلی در سرور رخ داده",
      },
      { status: 500 }
    );
  }
};
