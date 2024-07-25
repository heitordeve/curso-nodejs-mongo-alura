import express from "express";
import conectBaseDados from "./config/dbConnect.js";

const conexao = await conectBaseDados();

conexao.on("error", (erro) =>{
    console.error("Erro de Conexão", erro);
})

conexao.once("open", () => {
    console.log("Conexão com banco de dados com sucesso");
});

const app = express();

app.use(express.json());

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

function buscarLivrosporID(id){
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de NodeJS");
});

app.get("/livros/:id", (req, res) => {
    const index = buscarLivrosporID(req.params.id);
    res.status(200).json(livros[index]);
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});


app.post("/livros", (req,res) => {
    livros.push(req.body);
    res.status(201).send("Livro Cadastrado com sucesso! : )");
});

app.put("/livros/:id", (req, res) => {
    const index = buscarLivrosporID(req.params.id);
    livros[index].nomeLivro = req.body.nomeLivro;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscarLivrosporID(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro Removido com sucesso! : )");
});

export default app;