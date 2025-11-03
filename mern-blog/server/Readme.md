# 📰 MERN Blog Application

A simple full-stack **MERN Blog App** built with **MongoDB**, **Express**, **React (Vite)**, and **Node.js**.  
The app allows users to view and manage blog posts with authentication handled via **Clerk**.

---

## 🚀 Live Demo

- **Frontend (Deployed on Vercel):** [https://mern-stack-integration-yuti136-n5y3.vercel.app/]
- **Backend (Currently running locally):** http://localhost:5000  

---

## 🛠️ Tech Stack

**Frontend:**
- React (Vite)
- Clerk Authentication
- Axios for API calls
- Tailwind CSS for styling

**Backend:**
- Node.js & Express
- MongoDB (via Mongoose)
- dotenv, cors, uuid, body-parser
- Custom middlewares for logging, validation & error handling

---

## ⚙️ Local Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yuti136/mern-stack-integration-yuti136.git
cd mern-stack-integration-yuti136
2️⃣ Setup the Backend
bash
Copy code
cd server
npm install
Create a .env file in the server folder and add:

ini
Copy code
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern_blog
Start the server:

bash
Copy code
npm run dev
The backend will run at:

arduino
Copy code
http://localhost:5000
3️⃣ Setup the Frontend
bash
Copy code
cd ../client
npm install
npm run dev
Then open: https://mern-stack-integration-yuti136-n5y3.vercel.app/

arduino
Copy code

🌐 Deployment
Frontend → Deployed on Vercel

Backend → Currently local; can be deployed to Render or Railway later.

📄 License
This project is for educational purposes and open for improvement or customization.