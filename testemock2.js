
const axios = require('axios');

async function getGithubUser(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('Não foi possível obter dados do usuario informado');
  }

}
  
// Exemplo de uso da função buscarEndereco
getGithubUser('lucasfurlani96')
.then(data => console.log(data))
.catch(error => console.error(error.message));

module.exports = {
getGithubUser
}