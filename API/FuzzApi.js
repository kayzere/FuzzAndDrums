const API_TOKEN = "votre_token_ici"

export function getMusiqueFromApiWithSearchedText(text){
    const url = 'notre site web' + API_TOKEN + '&language=fr&query=' + text
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
};