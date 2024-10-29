import User from "../models/user_model.js";
import bcryptjs from "bcryptjs";
import { errorhandler } from "../utils/errors.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("user created successfully");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body; // we want a request from the body to have the email and password//
  try {
    const validUser = await User.findOne({ email }); // creating the constant to work on //
    if (!validUser) return next(errorhandler(404, "user not found")); // validation in database//
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorhandler(401, "wrong credentials!")); // validation in database
  } catch (error) {}
  next(error);
};
