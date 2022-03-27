import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;
const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  todoBy: {
    type: ObjectId,
    ref: "User",
  },
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
