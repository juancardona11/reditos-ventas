const Ventas = require("./ventas.dao");
const mongoose = require("mongoose");

exports.createAnswer = (req, res) => {
  const newAnswer = {
    type: req.body.type,
    text: req.body.text
  };
  Ventas
  .create(newAnswer, (err, answer) => {
    if (err) return res.status(500).send("Server error");
    res.send({ message: "Respuesta Creada!" });
  });
};

exports.getAll = (req, res) => {
  Ventas.find((err, answers) => {
    res.send(answers);
  });
};

exports.desactiveAnswer = (req, res) => {
  const answerData = {
    id: req.body.id
  };
  answerId = mongoose.Types.ObjectId(answerData.id);
  Ventas.find({ type: criterio }, (err, answer) => {
    if (err) return res.status(500).send("Server error!");
    if (!answer) {
      // No existe respuesta con ese id
      res.status(409).send({ message: "Something is wrong" });
    } else {
      res.send({ answer });
    }
  });
};

exports.deleteAnswer = (req, res) => {
  answerData = {
    id: req.body.answerId
  };
  answerId = mongoose.Types.ObjectId(answerData.id);
  Ventas.findByIdAndDelete(answerId, (err, answer) => {
    if (err) return res.status(500).send("Server error!");
    if (!answer) {
      // No existe respuesta con ese id
      res.status(409).send({ message: "Something is wrong" });
    } else {
      res.send({ message: "Respuesta borrada" });
    }
  });
};