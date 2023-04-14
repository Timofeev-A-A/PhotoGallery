import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", userRoutes);


mongoose
  .connect(process.env.MONGODB_URI||'mongodb://localhost:27017/photogallery', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT||'3300', () => console.log(`Server running`));
  })
  .catch((error) => {
    console.error(error.message);
  });

mongoose.set("useFindAndModify", false);