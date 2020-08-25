import express, { response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import firestore from "./firebase";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(morgan(`dev`));
app.use(cors());
app.use(helmet());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.post("/api/getFreeboardData", async (req, res) => {
  try {
    let sendData = [];

    await firestore
      .collection("Boards")
      .where("type", "==", "free")
      .where("isDelete", "==", false)
      .get()
      .then((response) =>
        response.forEach((doc) => {
          sendData.push({
            refKey: doc.id,
            title: doc.data().title,
            author: doc.data().author,
            registDate: doc.data().registDate,
            hit: doc.data().hit,
          });
        })
      );

    return res.json(sendData);
  } catch (e) {
    console.log(e);
    return [];
  }
});

app.post("/api/getDocsboardData", async (req, res) => {
  try {
    let sendData = [];

    await firestore
      .collection("Boards")
      .where("type", "==", "docs")
      .where("isDelete", "==", false)
      .get()
      .then((response) =>
        response.forEach((doc) => {
          sendData.push({
            refKey: doc.id,
            title: doc.data().title,
            author: doc.data().author,
            registDate: doc.data().registDate,
            hit: doc.data().hit,
          });
        })
      );
    return res.json(sendData);
  } catch (e) {
    console.log(e);
  }
});

app.listen(PORT, () => {
  console.log(`Server start http://localhost:${PORT}`);
});
