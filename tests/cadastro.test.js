var supertest = require('supertest');
var app = require('../app');
var request = supertest(app);

test("Testing get enrolled user route and controller", async done => {
    const db = require('../database/db');
    await db.CreateConnection("testEnrollUserr");
    await db.Drop();

    var objPostTest = {
        pessoaTipo: "pf",
        pessoaFisica: {
            cpf: "111.444.777-35",
            genero: "Masc",
            dataNascimento: new Date('1999','06' - 1, '26')
        },
        pessoaJuridica: {
            cnpj: "59.448.077/0001-71",
            razaoSocial: "Teste LTDA"    
        },
        pessoa: {
            nome: "Nome",
            email: "email@email.com",
            telefone: "(41) 99999-9999",
            celular: "(41) 99999-9999",
            fotoUrl: "www.urlfoto.com.br"
        },
        enderecos: [
            {
                logradouro: "Rua teste",
                numero: "500",
                complemento: "Apto T1",
                bairro: "Bairro",
                cidade: "Cidade",
                estado: "E1",
                cep: "11111-111"
            },
            {
                logradouro: "Rua teste1",
                numero: "501",
                complemento: "Apto T2",
                bairro: "Bairro2",
                cidade: "Cidade2",
                estado: "E2",
                cep: "22222-222"
            }
        ]

    }

    var objGetTest = {
        cpf: '111.444.777-35',
        genero: 'Masc',
        dataNascimento: '1999-06-26T03:00:00.000Z',
        pessoaDados: {
          enderecos: [{
            logradouro: "Rua teste",
            numero: "500",
            complemento: "Apto T1",
            bairro: "Bairro",
            cidade: "Cidade",
            estado: "E1",
            cep: "11111-111"
        },{
            logradouro: "Rua teste1",
            numero: "501",
            complemento: "Apto T2",
            bairro: "Bairro2",
            cidade: "Cidade2",
            estado: "E2",
            cep: "22222-222"
        }],
          nome: 'Nome',
          email: 'email@email.com',
          telefone: '(41) 99999-9999',
          celular: '(41) 99999-9999',
          fotoUrl: 'www.urlfoto.com.br'
        }
    }
    await request.post("/cadastro").send(objPostTest).expect(200);
    await request.get("/cadastro").query({pessoaTipo: 'pf', id:'111.444.777-35'}).expect("Content-Type", /json/).expect([objGetTest]).expect(200);
    
    await db.Drop();

    await db.Disconnect();

    done();  
});
