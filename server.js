import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/database.js";
import counterRoutes from "./routes/counterRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());



app.use("/api/counter", counterRoutes);
app.use("/api/users", userRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
