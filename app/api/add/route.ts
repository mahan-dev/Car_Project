import { Profile } from "@/models/profile";
import { UserModel } from "@/models/user";
import { authOptions } from "@/utils/authOptions";
import { AddForm } from "@/modules/interface/FormValues";
import { connectDb } from "@/utils/connectDb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { Types } from "mongoose";

export const POST = async (req: Request) => {
  try {
    await connectDb();
    const res: AddForm = await req.json();
    const { year, gearbox, engine, cylinder, description, imageUrl, addDate } =
      res;

    const session = await getServerSession(authOptions);
    if (!session)
      return NextResponse.json(
        {
          status: "Failed",
          error: "please login first",
        },
        { status: 401 }
      );

    const user = await UserModel.findOne({ email: session.user.email });
    if (!user)
      return NextResponse.json(
        { status: "Failed", error: "user not found" },
        { status: 404 }
      );


    await Profile.create({
      year: +year,
      gearbox,
      engine,
      cylinder: +cylinder,
      description,
      image: imageUrl,
      category: "suv",
      addDate,
      userId: new Types.ObjectId(user._id),
    });
   

    return NextResponse.json({ status: "Success", message: "success" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { status: "Failed", error: "server Error" },
      { status: 500 }
    );
  }
};
