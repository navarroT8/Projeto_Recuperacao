var express = require("express");
var router = express.Router();

var perguntasController = require("../controllers/perguntasController");

router.get("/listar", function (req, res) {
    perguntasController.listar(req, res);
});

module.exports = router;