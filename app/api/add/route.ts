import { connectDb } from "@/core/utils/connectDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    await connectDb();
    const body = await req.formData();

    console.log(body);
    return NextResponse.json({ status: "Success", message: "success" });
  } catch {
    return NextResponse.json(
      { status: "Failed", message: "2wd" },
      { status: 500 }
    );
  }
};
