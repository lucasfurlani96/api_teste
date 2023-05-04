//npm init -y
//npm install axios
//node .\testeCEP.js

const axios = require('axios');

async function buscarEndereco(cep) {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data;
  } catch (error) {
    throw new Error('Não foi possível obter o endereço a partir do CEP informado');
  }
}

// Exemplo de uso da função buscarEndereco
buscarEndereco('88113-000')
  .then(endereco => console.log(endereco))
  .catch(error => console.error(error.message));

module.exports = {
    buscarEndereco
}