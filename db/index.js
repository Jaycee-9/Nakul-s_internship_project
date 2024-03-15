import mongoose from "mongoose";

const connectToDb = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.atlasUsername}:${process.env.atlasPassword}@nakulinternshipproject.e7gyzow.mongodb.net/?retryWrites=true&w=majority&appName=nakulInternshipProject`
  );
  console.log("database connected");
};

export default connectToDb;
