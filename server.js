const express = require('express');
const dotenv = require("dotenv").config();
const app = express();

const connectDB = require("./config/dbConnection");
connectDB();

const PORT = 5000 || process.env.PORT;

// .use is used when we want to handle middleware
app.use(express.json()); //parser provided by express to parse json data from request body
app.use("/api/v1/contacts/", require("./routes/contactRoutes"))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));