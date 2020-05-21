var minhaPromise = function() {
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://pokeapi.co/api/v2/type/fire');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

minhaPromise()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    })

axios.get('https://pokeapi.co/api/v2/type/fire')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    })    