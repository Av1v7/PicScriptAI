# AI-Image-Generator

This is a web application that allows users to generate images using AI. The app uses the OpenAI API to generate images based on user prompts. Users can also share their generated images with the community.

## Usage

### Prerequisites

- Node.js (v14 or later)
- OpenAI API key
- MongoDB Atlas account (optional)
- Cloudinary account (optional)

### Installation

1. Clone the repository: `git clone https://github.com/Av1v7/Av1v-AI.git`
2. Create a new `.env` file in the `server` directory, and add your OpenAI API key, MongoDB Atlas URL, Cloudinary cloud name, API key, and API secret. For example:
```
OPENAI_API_KEY = ""
MONGODB_URL = ""

CLOUDINARY_CLUD_NAME = ""
CLOUDINARY_API_KEY = ""
CLOUDINARY_API_SECRET= ""
```
3. In the terminal, navigate to the `server` directory, and run `npm install` to install the server dependencies.
4. If you're using MongoDB Atlas, create a new database and add a collection named `generated-images`.
5. If you're using Cloudinary, create a new folder named `ai-generated-images`.
6. In the terminal, run `npm run start` to start the server.
7. In a new terminal window, navigate to the `client` directory, and run `npm install` to install the client dependencies.
8. In the terminal, run `npm run dev` to start the client.
9. Open your web browser and go to `http://localhost:8080`.
10. Enter a prompt and click "Generate Image" to generate an image.
11. Click "Share" to share your generated image with the community.
12. And the most important. Give it a star 😊 

## Screenshots
![Screenshot 1](https://cdn.discordapp.com/attachments/636950095056863243/1087847068002943056/image.png)
![Screenshot 2](https://cdn.discordapp.com/attachments/636950095056863243/1087847068254613584/image.png)
![Screenshot 3](https://cdn.discordapp.com/attachments/636950095056863243/1087847068535623740/image.png)

### Need Help?

-  **Discord :** Av1v7#2420 || https://discord.gg/Pf2cj9ZNAa.
-  **Twitter :** https://twitter.com/Av1vF.
-  **Gmail :** avivshemesh96@gmail.com.
