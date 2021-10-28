const botao = document.getElementById("b");

botao.addEventListener("click", function(evento){

      
        if((document.getElementById("nome").value != "") && (document.getElementById("data").value != "")
         && (document.getElementById("cpf").value.length >= 10) && (document.getElementById("obri").value.length >= 8) && (document.getElementById("email").value.length >= 5) &&
         (document.getElementById("cidade").value.length>=5) && (document.getElementById("cep").value.length>=5) && (document.getElementById("rua").value.length>=5) && (document.getElementById("bairro").value.length>=5)
         && (document.getElementById("numero").value.length>=1) && (document.getElementById("comp").value.length>=5)){
            window.location.href = "janela2.html";
        }else{
            window.alert("Preencha corretamente os campos!");
            evento.preventDefault();

        };

});

 
