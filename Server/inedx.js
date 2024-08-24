import express from "express";
const app = express();

app.get("/", (req,res) => {
    res.send("<h1>Hlw</h1>");
})

app.get("/about", (req,res) => {
    res.send("<h1>About me</h1><p>My name is Arshi</p>");
})

app.get("/contact", (req,res) => {
    res.send("<h1>Contact</h1><p>Phone no: +91 8252795680</p>");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
})