// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const { ClerkExpressRequireAuth } = require("@clerk/clerk-sdk-node");

// Routes
const postRoutes = require("./routes/posts");
const categoryRoutes = require("./routes/categories");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS setup for production and local development
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://mern-stack-integration-yuti136-n5y3.vercel.app"
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      console.warn(`❌ Blocked by CORS: ${origin}`);
      return callback(new Error("CORS policy: This origin is not allowed"));
    },
    credentials: true,
  })
);

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve uploaded images/files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Root health route
app.get("/", (req, res) => {
  res.send("✅ MERN Blog API running successfully on Render & Clerk configured!");
});

// ✅ Test route (protected)
app.get("/api/test-auth", ClerkExpressRequireAuth(), (req, res) => {
  res.json({
    message: "Authenticated!",
    userId: req.auth.userId,
    orgId: req.auth.organizationId || null,
  });
});

// ✅ API routes
app.use("/api/posts", postRoutes);
app.use("/api/categories", categoryRoutes);

// ✅ Global error handler
app.use(errorHandler);

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () =>
      console.log(`🚀 Server running at http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// ✅ Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error("❌ Unhandled Promise Rejection:", err);
  process.exit(1);
});

module.exports = app;
