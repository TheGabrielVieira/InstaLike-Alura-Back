import 'dotenv/config';
import { ObjectId } from "mongodb";
import conexaoBanco from "../config/dbConfig.js";

const conexao = await conexaoBanco(process.env.STRING_CONEXAO);

export async function getAllPosts() {
    const db = conexao.db("exemplo-instabytes");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
};

export async function criarPost(novoPost) {
        const db = conexao.db("exemplo-instabytes");
        const colecao = db.collection("posts");
        return colecao.insertOne(novoPost);
};

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("exemplo-instabytes");
    const colecao = db.collection("posts");
    const objtID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objtID)}, {$set:novoPost});
};