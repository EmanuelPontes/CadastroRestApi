CadastroRestApi

Criar web api com :
    Aplicação rodando com heroku -> https://cadastro-rest-api.herokuapp.com/
   
   
   -autenticação (mediante registro)
    - formulario de cadastro com os seguinte itens: 

        (*) Itens obrigatórios
        (*) Tipo: Pessoa física / Pessoa jurídica
        (*) Nome
        (*) Razão social (quando PJ)
        (*) CPF (quando PF)
        (*) CNPJ (quando PJ)
        (*) Sexo (quando PF)
        (*) Data de nascimento (quando PF)
        Email
        Telefone
        Celular
        Foto (apenas URL)
        Endereços(dois blocos de endereço)
            (*) Endereço
            (*) Número
            Complemento
            Bairro
            (*) Cidade
            (*) Estado
            (*) CEP

Utilizar mongoDb para salvar os Cadastros realizados
Estrutura do projeto será MVC(Model, view and controller)

-todo:
    Exclusão de registros
    Definir processos de segurança
    Corrigir a tabela de exibição da consulta adaptado para mobile.
    Criar refresh de jwt tokens a medida que eles expiram
    Salvar senhar como hash utilizando o bcrypto
    



