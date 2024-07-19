import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Curso de NodeJS");
});

export default app;