function extrairParametros(url) {
    var parametros = {};
    var partes = url.split("?")[1].split("&");

    partes.forEach(function (parte) {
        var chaveValor = parte.split("=");
        var chave = chaveValor[0];
        var valor = chaveValor[1];
        parametros[chave] = valor;
    });

    return parametros;
}

function construirNovaURL(parametros) {
    var novaURL = "https://suasaudemental.com.br/?";

    for (var chave in parametros) {
        novaURL += chave + "=" + parametros[chave] + "&";
    }

    return novaURL.slice(0, -1); // Remover o último "&"
}

var urlOriginal = window.location.href;

var parametros = extrairParametros(urlOriginal);

var novaURL = construirNovaURL(parametros);

window.location.href = novaURL;
