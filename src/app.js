const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors);
app.use(express.json());

app.listen(3000, () => console.log("server is running on port 3000"));
