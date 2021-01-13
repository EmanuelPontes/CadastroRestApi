window.addEventListener('load',() => {
   
    function loadJSON() {
        return new Promise(
            (resolve, reject) => {
                var xobj = new XMLHttpRequest();
                xobj.overrideMimeType("application/json");
                xobj.open('GET', '/estadosCidade.json', true);
                xobj.onreadystatechange = function() {
                    if (xobj.readyState == 4 && xobj.status == "200") {
    
                        // .open will NOT return a value but simply returns undefined in async mode so use a callback
                        resolve(xobj.responseText);
    
                    }
                }
    
                xobj.send(null);
            }
        );
        
    }

    async function fillStateSelector() {

        try {
            var listCitysAndStates = await loadJSON();
            listCitysAndStates = JSON.parse(listCitysAndStates);

            var estado0Query = document.querySelector("#estado0");
            var estado1Query = document.querySelector("#estado1");

            var estado0SiglaBranco = document.createElement('option');
            estado0SiglaBranco.setAttribute('value','');
            estado0SiglaBranco.innerHTML = '';

            var estado1SiglaBranco = document.createElement('option');
            estado1SiglaBranco.setAttribute('value','');
            estado1SiglaBranco.innerHTML = '';

            estado0Query.append(estado0SiglaBranco);
            estado1Query.append(estado1SiglaBranco);
            for(let estado of listCitysAndStates.estados) {
                var estado0Sigla = document.createElement('option');
                estado0Sigla.setAttribute('value',estado.sigla);
                estado0Sigla.innerHTML = estado.sigla;

                var estado1Sigla = document.createElement('option');
                estado1Sigla.setAttribute('value',estado.sigla);
                estado1Sigla.innerHTML = estado.sigla;

                estado0Query.append(estado0Sigla);
                estado1Query.append(estado1Sigla);
            }

            return listCitysAndStates;

        } catch (error) {
            console.log(error);
        }
    }


    async function fillCitysSelector () {

        try {
            var listCitysAndStates = await fillStateSelector();
            document.querySelector("#estado0").addEventListener("change", function () {
                var sigla = document.querySelector("#estado0").value;
                
                for(let estado of listCitysAndStates.estados) {
                    if (sigla == estado.sigla) {
                        
                        cidadeQuery = document.querySelector("#cidade0");
                        cidadeQuery.innerHTML = '';
                        
                        for (let cidade of estado.cidades) {
                            var cidadeNome = document.createElement('option');
                            cidadeNome.setAttribute('value',cidade)
                            cidadeNome.innerHTML = cidade;
                            cidadeQuery.append(cidadeNome);
                        }
                                    
                    }
                }
            });

            document.querySelector("#estado1").addEventListener("change", function () {
                var sigla = document.querySelector("#estado1").value;
                
                for(let estado of listCitysAndStates.estados) {
                    if (sigla == estado.sigla) {
                        
                        cidadeQuery = document.querySelector("#cidade1");
                        cidadeQuery.innerHTML = '';
                        
                        for (let cidade of estado.cidades) {
                            var cidadeNome = document.createElement('option');
                            cidadeNome.setAttribute('value',cidade)
                            cidadeNome.innerHTML = cidade;
                            cidadeQuery.append(cidadeNome);
                        }
                                    
                    }
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
    
    function onIdentificacaoChange() {
        console.log(document.getElementById("pessoaTipo").value);
    
        if (document.getElementById("pessoaTipo").value == "pj") {
            
            document.getElementById("cpfForm").style.display = "none";
            document.getElementById("dataNascForm").style.display = "none";
            document.getElementById("generoForm").style.display = "none";

            document.getElementById("cnpjForm").style.display = "block";
            document.getElementById("razaoSocialForm").style.display = "block";

            document.getElementById("cpf").removeAttribute("required");
            document.getElementById("dataNasc").removeAttribute("required");
            document.getElementById("genero").removeAttribute("required");

            document.getElementById("cnpj").setAttribute("required", "");
            document.getElementById("razaoSocial").setAttribute("required", "");
        } else {
            document.getElementById("cpfForm").style.display = "block";
            document.getElementById("dataNascForm").style.display = "block";
            document.getElementById("generoForm").style.display = "block";

            document.getElementById("cnpjForm").style.display = "none";
            document.getElementById("razaoSocialForm").style.display = "none";

            document.getElementById("cpf").setAttribute("required", "");
            document.getElementById("dataNasc").setAttribute("required", "");
            document.getElementById("genero").setAttribute("required", "");

            document.getElementById("cnpj").removeAttribute("required");
            document.getElementById("razaoSocial").removeAttribute("required");
        }
    }
    
    document.getElementById("pessoaTipo").addEventListener("change", onIdentificacaoChange);
    
    fillCitysSelector();
    
});
