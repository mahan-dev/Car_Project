import { connectDb } from "@/utils/connectDb";
import { FetcherResponse } from "@/helper/dataFetcher";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { Profile } from "@/models/profile";
import { UserModel } from "@/models/user";

export const POST = async (req: Request) => {
  try {
    await connectDb();
    const {
      model_make_id,
      model_name,
      image,
      price,
      gearbox,
      category,
      year,
      cylinder,
      engine,
      description,
      imageUrl,
    }: FetcherResponse = await req.json();

    const session = await getServerSession(authOptions);
    if (!session)
      return NextResponse.json(
        { status: "Failed", error: "Please login first" },
        { status: 401 }
      );

    const user = await UserModel.findOne({ email: session.user.email });

    if (!user)
      return NextResponse.json(
        { status: "Failed", error: "user not found" },
        { status: 404 }
      );
    await Profile.create({
      model_make_id,
      model_name,
      image,
      price: +price,
      gearbox,
      category,
      year: +year,
      cylinder: +cylinder,
      engine: +engine,
      description,
      imageUrl,
    });

    return NextResponse.json(
      { status: "Success", message: "Profile Edited" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { status: "Failed", error: "error connection" },
      { status: 500 }
    );
  }
};
