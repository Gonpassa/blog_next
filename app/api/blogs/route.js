import dbConnect from "@/utils/dbConnect";
import Post from "@/models/Post";

export async function getRecentBlogs() {
    await dbConnect();
    const pastPosts = Post.find().sort("-createdAt").limit(10);
    return pastPosts;
}
