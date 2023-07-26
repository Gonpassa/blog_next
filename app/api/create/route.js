import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Post from "@/models/Post";

export async function POST(req) {
    const body = await req.json();
    const { formData, structure } = body;
    const data = [];
    const newPost = new Post({ structure: structure });
    for (let i = 0; i < structure.length; i++) {
        const curr = structure[i];
        newPost[curr].unshift(formData[curr + i]);
    }
    await dbConnect();
    await Post.create(newPost);
    return NextResponse.json({ body: body }, { status: 200 });

    /*     switch (method) {
        case "POST":
            try {
                const blog = new Blog(req.body);
                await blog.save();
                res.status(201).json({ success: true, data: blog });
            } catch (error) {
                res.status(400).json({ success: false, error: error.message });
            }
            break;

        default:
            res.setHeader("Allow", ["POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    } */
}
