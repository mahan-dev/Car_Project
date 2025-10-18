import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    return NextResponse.json({ status: "Success", message: "got it " });
  } catch {
    return NextResponse.json({ status: "Failed", message: "got it " });
  }
};
