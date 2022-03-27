import express from "express";
import "dotenv";
const bcrypt = require("bcrypt");
import Conn from "./Db/connection/conn";
import UserSchema from "./Db/models/userSchema";

const app = express();
const PORT = process.env.PORT || 5000;

//FIXME: For Sercurity of password of database
dotenv.config({ path: "./config.env" });

// app.get("/", (req, res) => {
//   res.json({ message: "Taha Ahmeed" });
// });

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

// middleware
app.use(express.json());

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(422).json({ error: "plase add all the fields" });
    }
    const user = await UserSchema.findOne({ email });
    if (user) {
      return res
        .status(422)
        .json({ error: "user already exists with that email" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    await new UserSchema({
      email,
      password: hashedPassword,
    }).save();
    res.status(200).json({ message: "signup successfully you can login now" });
  } catch (err) {
    console.log(err);
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}......`);
});
