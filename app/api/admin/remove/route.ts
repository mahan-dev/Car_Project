import { Profile } from "@/core/models/profile";
import { UserModel } from "@/models/user";
import { authOptions } from "@/utils/authOptions";
import { connectDb } from "@/utils/connectDb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const DELETE = async () => {
  try {
    await connectDb();

    const session = await getServerSession(authOptions);
    if (!session)
      return NextResponse.json(
        { status: "Failed", error: "Please login first" },
        { status: 403 }
      );

    const user = await UserModel.findOne({ email: session.user.email });
    if (!user)
      return NextResponse.json(
        { status: "Failed", error: "user not found" },
        { status: 404 }
      );

    console.log(user._id);
    const res = await Profile.deleteOne({ userId: user._id });
    console.log("🛬 ~ route.ts:25 -> res: ", res);

    return NextResponse.json({
      status: "Success",
      message: "successfully deleted",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { status: "Failed", error: "server error " },
      { status: 500 }
    );
  }
};
