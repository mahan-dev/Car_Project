import { connectDb } from "@/utils/connectDb";
import { FetcherResponse } from "@/helper/dataFetcher";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { Profile } from "@/models/profile";
import { UserModel } from "@/models/user";
import { Types } from "mongoose";

export const PATCH = async (req: Request) => {
  try {
    await connectDb();
    const {
      model_make_id,
      model_name,
      imageUrl,
      price,
      gearbox,
      category,
      year,
      cylinder,
      engine,
      description,
      addDate,
      _id,
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

    const profile = await Profile.findOne({ _id });
    console.log(profile);

    const userId = user._id as Types.ObjectId;
    const profileId = profile.userId as Types.ObjectId;

    if (!userId.equals(profileId))
      return NextResponse.json(
        { status: "Failed", error: "your access denied" },
        { status: 403 }
      );
    console.log(imageUrl);

    const res = Object.assign(profile, {
      model_make_id,
      model_name,
      image: imageUrl,
      price,
      gearbox,
      category,
      year,
      cylinder,
      engine,
      description: description.trim(),
      addDate,
    });
    await profile.save();
    console.log(res);
    console.log("bellow");

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
