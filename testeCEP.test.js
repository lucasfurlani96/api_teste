//npm install jest

////Para configurar o jest como script de teste deve-se editar o 'package.json'
//No agrupamento "scripts": {
//    "test": "echo \"Error: no test specified\" && exit 1"
//  }, alterar para:
//"scripts": {
//    "test": "jest"
//  },
//Para executar os testes:
//npm test

const axios = require('axios');
const { buscarEndereco } = require('./testeCEP');

jest.mock('axios');

describe('Teste da função buscarEndereco', () => {
  it('Deve retornar o endereço corretamente para um CEP válido', async () => {
    const data = {
      logradouro: 'Avenida Paulista',
      bairro: 'Bela Vista',
      localidade: 'São Paulo',
      uf: 'SP'
    };

    /*const data2 = {
        logradouro: 'Avenida Paulista - erro',
        bairro: 'Bela Vista',
        localidade: 'São Paulo',
        uf: 'SP'
      };*/


    axios.get.mockResolvedValue({ data });

    const endereco = await buscarEndereco('01310-100');

    expect(endereco).toEqual(data);
    expect(axios.get).toHaveBeenCalledWith('https://viacep.com.br/ws/01310-100/json/');
  });

  it('Deve lançar um erro para um CEP inválido', async () => {
    const errorMessage = 'Não foi possível obter o endereço a partir do CEP informado';
    axios.get.mockRejectedValue(new Error(errorMessage));

    await expect(buscarEndereco('12345-678')).rejects.toThrow(errorMessage);
    expect(axios.get).toHaveBeenCalledWith('https://viacep.com.br/ws/12345-678/json/');
  });
});