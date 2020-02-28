const API_TOKEN = "9ba3265fa4c0615501083ce55d7eebc1";

export function getMusiqueFromApiWithSearchedText(text){
    //const url = 'http://172.23.82.91:8000/public/musique/' + text
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }