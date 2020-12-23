module.exports = app => {

    var controller = {
        get: (req, res, next) => {
            var PessoaJuridica = app.models.pessoaJuridica;
            var PessoaFisica = app.models.pessoaFisica;

            var pessoaTipoModel = (req.query.pessoaTipo === "pj") ? PessoaJuridica : PessoaFisica;

            pessoaTipoModel.find({})
            .select("-_id -__v")
            .populate({
                path : 'pessoaDados',
                select: '-_id -__v',
                populate : {
                  path : 'enderecos',
                  select: '-_id -__v',
                }
            })
            .exec(function(err, obj) {
                if (err) {
                    console.log(err);
                } else {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(obj));
                }
            });
        },
        post: (req, res, next) => {
            
            var dataObj = req.body;
            var pessoaTipoDto = dataObj.pessoaTipo;
            var pessoaDto = dataObj.pessoa;
            var enderecosDto = dataObj.enderecos;
            var pessoaFisicaDto = dataObj.pessoaFisica;
            var pessoaJuridicaDto = dataObj.pessoaJuridica;


            var PessoaModel = app.models.pessoa;
            var EnderecoModel = app.models.endereco;
            var PessoaFisica = app.models.pessoaFisica;
            var PessoaJuridica = app.models.pessoaJuridica;
            var dbUtil = app.lib.dbUtil;

            dbUtil.saveArray(enderecosDto, EnderecoModel).then((enderecosArr) => {
                
                pessoaDto = Object.assign(pessoaDto, {enderecos: enderecosArr});

                dbUtil.save(pessoaDto, PessoaModel).then((pessoaId) => {
                    var pessoaTipoDadosDto = (pessoaTipoDto === "pessoaJuridica") ? pessoaJuridicaDto : pessoaFisicaDto;
                            
                    pessoaTipoDadosDto = Object.assign(pessoaTipoDadosDto, {pessoaDados: pessoaId});
                            
                    pessoaTipoModel = (pessoaTipoDto === "pessoaJuridica") ? PessoaJuridica : PessoaFisica;
                    
                    dbUtil.save(pessoaTipoDadosDto, pessoaTipoModel).then((pessoaTipoId) => {
                        res.status(200).send();
                    }).catch(
                        (e) => {
                            res.status(400).send();
                        }
                    );
                     
                });
                
            }).catch(
                (e) => {
                    res.status(400).send();
                }
            );;


            

        }
    }

    return controller;
};