import mongoose from "mongoose";

const livroSchema = new Mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
}, {versionKey: false});

const livro = mongoose.model("livros", livroSchema);

export default livro;