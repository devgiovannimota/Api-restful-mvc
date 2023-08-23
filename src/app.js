const express = require("express");
const cors = require("cors");
const routes = require("./routes/router");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", routes);

app.use((req, res, next) => {
  res.status(404).json({ error: "Rota não encontrada" });
});

const conn = require("./db/conn");
conn();

app.listen(3000, () => console.log("server is running on port 3000"));
