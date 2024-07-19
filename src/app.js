import express from "express";

const app = express();

const livros = [
    {
        id: 1,
        nomeLivro: "Livro 1"
    },
    {
        id: 2,
        nomeLivro: "Livro 2"
    },
]

app.get("/", (req, res) => {
    res.status(200).send("Curso de NodeJS");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

export default app;