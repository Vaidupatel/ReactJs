const connectTomongo = require("./db");
const express = require("express");
const cors = require("cors");

connectTomongo().then(() => {
  console.log("Connected to MongoDB");
});

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

// Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNoteBook listening at http://localhost:${port}`);
});
