const axios = require('axios');
const { getGithubUser } = require('./testemock2');

jest.mock('axios');

describe('Teste da função getGithubUser', () => {
  it('Deve retornar detalhes do usuario requisitado', async () => {
    const data = {
      "login": "lucasfurlani96",
      "id": 127801484
    }

    axios.get.mockResolvedValue({ data });

    const detalhesUsuario = await getGithubUser('lucasfurlani96');

    expect(detalhesUsuario).toEqual(data);
    expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/lucasfurlani96');
  });

  
});