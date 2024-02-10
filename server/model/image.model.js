import mongoose from "mongoose";
const imageSchema = new mongoose.Schema(
  {
    image: [
      {
        location: {
          typeof: String,
          required: true,
        },
      },
    ],
  },
  { timeseries: true }
);
const imageModel = mongoose.model("ImageModel", imageSchema);
export default imageModel;
