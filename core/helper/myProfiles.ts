import { Types } from "mongoose";
import { Session } from "next-auth";
import { AddForm } from "@/modules/interface/FormValues";
import { UserModel } from "@/models/user";

export interface Profiles extends AddForm {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  image: string;
}

export interface ProfileProps {
  userId: Types.ObjectId;
  _id: Types.ObjectId;
  createdAt: Date;
  profiles: Profiles[];
}

export const userProfiles = async (
  session: Session
): Promise<ProfileProps[]> => {
  return await UserModel.aggregate<ProfileProps>([
    {
      $match: { email: session.user.email },
    },
    {
      $lookup: {
        from: "carprofiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);
};
