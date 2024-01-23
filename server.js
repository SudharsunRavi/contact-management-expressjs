const express = require('express');
const dotenv = require("dotenv").config();
const app = express();

const connectDB = require("./config/dbConnection");
connectDB();

const PORT = process.env.PORT || 5000 ;

// .use is used when we want to handle middleware
app.use(express.json()); //parser provided by express to parse json data from request body

app.use("/api/v1/contacts/", require("./routes/contactRoutes"))
app.use("/api/v1/users/", require("./routes/userRoutes"))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));