const telefone = document.getElementById("telefone");

telefone.addEventListener("input", function () {

    let valor = telefone.value;

    valor = valor.replace(/\D/g, "");

    valor = valor.slice(0, 11);

    if (valor.length > 7){

        valor = "(" + valor.slice(0, 2) + ")" + valor.slice(2, 7) + "-" + valor.slice(7);

    } else if (valor.length > 2){
        valor = 
        "(" + valor.slice(0, 2) + ") " + valor.slice(2);
    }


    telefone.value = valor;

});

const cpf = document.getElementById("cpf");

cpf.addEventListener("input", function () {

    let valor = cpf.value;

valor = valor.replace(/\D/g, "");

valor = valor.slice(0, 11);

if (valor.length > 9) {

    valor = valor.slice(0, 3) + "." + valor.slice(3, 6) + "." + valor.slice(6, 9) + "-" + valor.slice(9)

} else if (valor.length > 6) {

    valor = valor.slice(0, 3) + "." + valor.slice(3, 6) + "." + valor.slice(6);

} else if (valor.length > 3) {

    valor = valor.slice(0, 3) + "." +valor.slice(3);

}

cpf.value = valor;




});