import { Profile } from "@/core/models/profile";
import { UserModel } from "@/core/models/user";
import { authOptions } from "@/core/utils/authOptions";
import { connectDb } from "@/utils/connectDb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

interface GetProps {
  params: Promise<{ profileId: string }>;
}
export const GET = async (req: Request, { params }: GetProps) => {
  try {
    await connectDb();

    const { profileId } = await params;

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

    const profile = await Profile.findOne({ _id: profileId });
    profile.published = true;
    await profile.save();

    return NextResponse.json(
      { status: "Success", message: "Approved" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        status: "Failed",
        error: "something went wrong",
      },
      { status: 500 }
    );
  }
};
