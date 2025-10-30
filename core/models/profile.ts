import { Schema, Model, model, models } from "mongoose";
import { ProfileInterface } from "@/models/interface/profileSchema";

const profileSchema = new Schema<ProfileInterface>(
  {
    year: {
      required: true,
      type: String,
    },
    gearbox: {
      required: true,
      type: String,
    },
    engine: {
      required: true,
      type: String,
    },
    cylinder: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    addDate: {
      required: true,
      type: Date,
    },

    image: {
      required: true,
      type: String,
    },

    category: {
      required: true,
      type: String,
      enum: ["suv", "sedan", "coupe", "hatchback", "convertible", "sport"],
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: "carDb",
    },
  },
  { timestamps: true }
);

export const Profile: Model<ProfileInterface> =
  models.carProfile ||
  model<ProfileInterface>("carProfile", profileSchema, "Car");
