const dados1 = {
  usuarios: ["João", "Maria"],
  configuracoes: { tema: "escuro" }
};

const dados2 = {
  usuarios: ["Paulo", "vitoria"],
  configuracoes: { tema: "escuro" }
};

// Converter para JSON
const jsonString = JSON.stringify(dados1);
const jsonString2 = JSON.stringify(dados2);

// Converter de volta
//const objetoOriginal = JSON.parse(jsonString);

// Salvar em arquivo (Node.js)
const fs = require('fs');
const atuais = fs.readFileSync("dados.json", 'utf8');
const Jsonatual = JSON.parse(atuais); 

Jsonatual.push(dados2)

fs.writeFileSync("dados.json", JSON.stringify(Jsonatual, null, 2));

// Ler de arquivo
const dadosLidos = JSON.parse(fs.readFileSync("dados.json", "utf8"));

console.log(dadosLidos)