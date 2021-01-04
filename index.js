const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index", {nome: "", salario: "", vendas: "",
                         comissao: "", salariofinal: ""});
} );

app.post("/calcular", function(req, res){
    let nome = req.body.nome;
    let salario = parseFloat(req.body.salario);
    let comissao = parseFloat(req.body.comissao);
    let vendas = parseFloat(req.body.vendas);
    let salariofinal = salario + vendas * comissao / 100;
    
    res.render("index", {nome: nome, salario: salario.toFixed(2), vendas: vendas.toFixed(2),
                         comissao: comissao.toFixed(2), salariofinal: salariofinal.toFixed(2)
                        });
});

app.listen(3000);
