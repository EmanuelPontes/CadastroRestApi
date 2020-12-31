window.addEventListener('load',() => {
   
    function loadJSON() {
        return new Promise(
            (resolve, reject) => {
                var xobj = new XMLHttpRequest();
                xobj.overrideMimeType("application/json");
                xobj.open('GET', 'http://localhost:8080/estadosCidade.json', true);
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
    
    loadJSON().then((response) => {
        var listEstadosCidades = {};
        // Do Something with the response e.g.
        var estado0Query = document.querySelector("#estado0");
    
        var estadoSiglaBranco = document.createElement('option');
        estadoSiglaBranco.setAttribute('value','');
        estadoSiglaBranco.innerHTML = '';
        estado0Query.append(estadoSiglaBranco);
        var listEstadosCidades = JSON.parse(response);
        for(let estado of listEstadosCidades.estados) {
            var estadoSigla = document.createElement('option');
            estadoSigla.setAttribute('value',estado.sigla);
            estadoSigla.innerHTML = estado.sigla;
            estado0Query.append(estadoSigla);
        }
        
        return listEstadosCidades;
    }).then(
        (listEstadosCidades) => {

            document.querySelector("#estado0").addEventListener("change", function () {
                var sigla = document.querySelector("#estado0").value;
    
                for(let estado of listEstadosCidades.estados) {
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

    });
    
    loadJSON().then((response) => {
        var listEstadosCidades = {};
        // Do Something with the response e.g.
        var estado0Query = document.querySelector("#estado1");
    
        var estadoSiglaBranco = document.createElement('option');
        estadoSiglaBranco.setAttribute('value','');
        estadoSiglaBranco.innerHTML = '';
        estado0Query.append(estadoSiglaBranco);
        var listEstadosCidades = JSON.parse(response);
        for(let estado of listEstadosCidades.estados) {
            var estadoSigla = document.createElement('option');
            estadoSigla.setAttribute('value',estado.sigla);
            estadoSigla.innerHTML = estado.sigla;
            estado0Query.append(estadoSigla);
        }
        
        return listEstadosCidades;
    }).then(
        (listEstadosCidades) => {

            document.querySelector("#estado1").addEventListener("change", function () {
                var sigla = document.querySelector("#estado1").value;
    
                for(let estado of listEstadosCidades.estados) {
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

    });

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
    
    
});
