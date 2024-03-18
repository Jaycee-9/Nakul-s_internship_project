import express from "express";
import cors from "cors";
import router from "./route/routes.js";
import bodyParser from "body-parser";
import connectToDb from "./db/index.js";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 4000;

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(join(__dirname, "public", "client")));
app.set("trust proxy", 1);
app.use("/", router);

Promise.all([connectToDb()])
  .then(() => app.listen(PORT, () => console.log(`server is live`)))
  .catch((error) => {
    console.error(`MongoDB Atlas Error: ${error}`);
    process.exit();
  });
