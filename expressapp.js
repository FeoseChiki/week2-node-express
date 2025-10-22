require("dotenv").config(); //

const express = require("express");
const app = express();

const PORT = process.env.PORT;app.use(express.json());

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${req.body}`);
  next();
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});

app.get("/", (req, res) => {
    return res.send("My Week 2 API!");
});

app.post("/user", (req,res) => {
    const user = req.body;               
    console.log(`hello, ${user.name}!`)
    return res.send(`hello, ${user.name}!`)
    
});

app.get('/user/:id', (req, res) => {
  const id = req.params.id
  console.log(`User ${id} profile`);
  res.send(`User ${id} profile`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({error: "Something went wrong!"});
});