
function alterarnocartao(){
    var nome  = document.getElementById("nomedotitulardocartao").value;
    document.getElementById("cartao_nome").innerHTML = (nome);
    }

function alterarnumerocartao(){
    var numero  = document.getElementById("numerodocartao").value;
    document.getElementById("cartao_numero").innerHTML = (numero);
    }
    
function alterarcvc(){
    var numero  = document.getElementById("codigodeverificao").value;
    document.getElementById("cartao_cvc").innerHTML = (numero);
    }

    
function alterarmeseanocartao(){
        var numero  = document.getElementById("meseanodeexpiracao").value; // 2024-08
        var teste = numero[5]+numero[6]+"/"+numero[2]+numero[3];
        console.log(teste);
        document.getElementById("cartao_mes_ano").innerHTML = teste;
        }

    
function enviarForm(event){
    event.preventDefault();
    console.log("teste");
    document.getElementById("apresentacao").style.display = "none";
    document.getElementById("conclusao__de__cadastro").style.display = "block";
}
    