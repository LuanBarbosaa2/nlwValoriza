import express from "express";

//@types/express
const app = express();

/**
 * GET    => Buscar uma informação.
 * POST   => Inserir (Criar) uma informação.
 * PUT    => Alterar uma informação.
 * DELETE => Remover um dado.
 * PATCH  => Alterar uma informação específica.
 */

app.get("/test", (request, Response) => {
  //Request => Entrando
  //Response => Saindo
  return Response.send("Olá NLW 06!");
});

app.post("/test-post", (request, response) => {
  return response.send("Olá NLW método POST");
});

//http://localhost:3000
app.listen(3000, () => console.log("Server is running NLW 06!"));