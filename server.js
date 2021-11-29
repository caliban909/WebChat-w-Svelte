//server for running app on local machine -node server.js
const express = require("express");
const app = express();
const port = process.env.PORT || 6969;
//const cors = require("cors");
const path = require("path");
//app.use(cors());

//logic here

app.use(express.static("public"));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});
app.listen(port, () => {
    console.log(`Server is up at port ${port}`);
});