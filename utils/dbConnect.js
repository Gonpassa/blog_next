import mongoose from "mongoose";

export default async function dbConnect() {
  try {
    await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
