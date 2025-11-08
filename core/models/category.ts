import { model, Model, models, Schema } from "mongoose";
import { CategorySchema } from "@/models/interface/categorySchema";

const categorySchema = new Schema<CategorySchema>({
  name: {
    type: [String],
    required: true,
  },
});

export const Category: Model<CategorySchema> =
  models.carCategory || model<CategorySchema>("carCategory", categorySchema);
