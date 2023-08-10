const express = require("express");

const server = express();

server.get("/curso/:id", (req, res) => {
  const id = req.params.id;

  return res.json({ curso: `Curso: ${id}` });
});

server.listen(3000)
