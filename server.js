const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT;

app.get("/", (req, res)=>{
    res.json("Hello World");
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));