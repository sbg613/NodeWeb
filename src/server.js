import express from "express";

const PORT = 4000;
const app = express();

const handleListening = () => {
    console.log(`Server listenting on http://localhost:${PORT} `)
};

app.listen(PORT, handleListening);

const handleListeningRoot = (req, res) => {
    return res.send("=====handleListeningRoot======");
};
const handleListeningLogin = (req, res) => {
    return res.send("=====handleListeningLogin======");
};

app.get("/", handleListeningRoot);
app.get("/login", handleListeningLogin);