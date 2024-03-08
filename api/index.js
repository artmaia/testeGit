import express from "express"
import cors from "cors"

const app = express;

app.request(express.json);
app.use(cors());

app.listen(8080);