// Importando o módulo 'express' para criar o servidor
import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Criando uma instância do aplicativo Express
const app = express();
app.use(express.static("uploads"));
routes(app);

// Iniciando o servidor para escutar na porta 3000 e exibir uma mensagem de sucesso no console
app.listen(3000, () => {
    console.log("Servidor escutando...");
});





