import express from "express";
import * as dovenv from 'dotenv';
import { Configuration, OpenAIApi } from "openai";

dovenv.config();

const router = express.Router();

const configuration = new Configuration({ 
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration);

router.route('/').get((request, response) => {
    response.send("Hello From Av1v-AI!");
})

router.route('/').post( async (request, response) => {
    try {
        const { prompt } = request.body;

        const aiResponse = await openai.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        });

        const image = aiResponse.data.data[0].b64_json;

        response.status(200).json({ photo: image });
    } catch (error) {
        console.log(error);
        response.status(500).send(error?.response.data.error.message);
    }
})

export default router;