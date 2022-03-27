import mongoose from "mongoose";

// Database Connection
const DB = process.env.DATABASE;

const conn = mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.on("connect", () => {
  console.log("connected on mongoDb Successfully");
});

mongoose.connection.on("error", (err) => {
  console.log("Error Conntecting", err);
});

export default conn;
