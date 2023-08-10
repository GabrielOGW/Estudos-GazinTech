const express = require("express");
const bodyParser = require("body-parser");

const server = express();

server.use(bodyParser.json());

const cursos = ["nodeJS", "JavaScript", "React Native"];

server.get("/cursos", (req, res) => {
  return res.json(cursos);
});

server.post("/cursos", (req, res) => {
  const { name } = req.body;
  cursos.push(name);

  return res.json(cursos);
});

server.put("/cursos/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});

server.delete("/cursos/:index", (req, res) => {
  const { index } = req.params;

  cursos.splice(index);

  return res.json(cursos);
});

server.listen(3000);
