import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    headings: [String],
    subheadings: [String],
    images: [String],
    bodyTexts: [String],
  },
  { timestamps: true }
);

const Post = mongoose.model.Post || mongoose.model("Post", PostSchema);

export default Post;
