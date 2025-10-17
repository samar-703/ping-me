
# Repository Overview

FULL-STACK CHAT AND VIDEO CALLING APP

Features:

-  Discover new friends and learn with them
-  Real-time chat
-  Peer-to-peer video calling
-  Add friends and view their learning languages
-  Secure JWT-based authentication
-  User profiles with language goals and basic info




## Tech Stack

Frontend: React, React Router, Axios

Backend: Node.js, Express.js, Tanstack-query

Database: MongoDB + Mongoose

Real-time: Socket.io, WebRTC

Auth: JWT, bcrypt

Global State management with Zustand

Deployment: Render


## Environment Variables (/backend)

To run this project, you will need to add the following environment variables to your .env file

PORT=5001
MONGO_URI=your_mongo_uri

STEAM_API_KEY=your_steam_api_key

STEAM_API_SECRET=your_steam_api_secret

JWT_SECRET_KEY=your_jwt_secret  

NODE_ENV=development

VITE_STREAM_API_KEY=your_stream_api_key (for /frontend)




## Run Locally

Run the backend using these commands:

```bash
  cd backend

  npm install

  npm run dev
```


Run the fronted using these commands:

```bash
  cd fronted

  npm install

  npm run dev
```
