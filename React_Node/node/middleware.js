const express = require("express");
const bodyParser = require("body-parser");

const server = express();

server.use(bodyParser.json());

const cursos = ["nodeJS", "JavaScript", "React Native"];

server.use((req, res, next) => {
  console.log(`ULR chamada: ${req.url}`);

  return next();
});

function checkCurso(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: "Nome do Curso é obrigatorio" });
  }
  return next();
}

function checkIndexCurso(req, res, next) {
  const curso = cursos[req.params.index];
  if (!curso) {
    return res.status(400).json({ error: "Curso inexistente" });
  }
  req.curso = curso;
  return next();
}

server.get("/curso/:index", checkIndexCurso, (req, res) => {
  return res.json(req.curso);
});

server.get("/cursos", (req, res) => {
  return res.json(cursos);
});

server.post("/cursos", checkCurso, (req, res) => {
  const { name } = req.body;
  cursos.push(name);

  return res.json(cursos);
});

server.put("/cursos/:index", checkCurso, checkIndexCurso, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});

server.delete("/cursos/:index", checkIndexCurso, (req, res) => {
  const { index } = req.params;

  cursos.splice(index);

  return res.json(cursos);
});

server.listen(3000);
