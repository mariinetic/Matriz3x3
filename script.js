function gerarMatriz() {
    var matriz = [];
    for (var X = 0;X < 3; X++) {
        var linha = [];
        for (var Y = 0; Y < 3; Y++) {
            var valor = parseInt(document.getElementById(X.toString() + Y.toString()).value);
            linha.push(valor);
        }
        matriz.push(linha);
    }

    var html = "<h2>Matriz Gerada</h2><div class='matriz'>";
    for (var X = 0; X < 3; X++) {
        html += "<div class='row'>";
        for (var Y = 0; Y < 3; Y++) {
            html += "<div class='cell'>" + matriz[X][Y] + "</div>";
        }
        html += "</div>";
    }
    html += "</div>";

    document.getElementById("matrizGerada").innerHTML = html;
}
