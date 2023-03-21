import express from "express";
import * as dovenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Post from "../mongodb/models/post.js";

dovenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_AP_SECRET,
});

router.route("/").get(async (request, response) => {
  try {
    const posts = await Post.find({});

    response.status(200).json({ success: true, data: posts });
  } catch (error) {
    response.status(500).json({ success: false, message: error });
  }
});

router.route("/").post(async (request, response) => {
  try {
    const { name, prompt, photo } = request.body;
    const photoUrl = await cloudinary.uploader.upload(photo);
    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });

    response.status(200).json({ success: true, data: newPost });
  } catch (error) {
    response.status(500).json({ success: false, message: error });
  }
});

export default router;
