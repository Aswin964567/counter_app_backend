import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/database.js";
import counterRoutes from "./routes/counterRoutes.js";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());



app.use("/api/counter", counterRoutes);
app.use((req, res, next) => {
    console.log("hello");
    next();
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
