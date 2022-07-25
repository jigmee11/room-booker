import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // console.log(conn.connection.host);
    console.log("holbogdloo");
  } catch (e) {
    console.log("aldaa");
  }
};
