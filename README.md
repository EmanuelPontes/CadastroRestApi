CadastroRestApi

Criar web api com :
    -autenticação (usuario: admin,  senha:  12345)
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
    Página para consulta e exclusão de registros
    Definir processos de segurança


