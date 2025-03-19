import mongoose from "mongoose";

const counterSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please Add the title"],
    },
    count: {
      type: Number,
      required: [true, "Please Add counter"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Counter", counterSchema);
