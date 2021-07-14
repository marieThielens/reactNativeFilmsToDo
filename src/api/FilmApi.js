const MON_API = "040be6ed973ee07470f83d3d9cb13d36";

// fetch : api de react native

export function filmApi (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + MON_API + 
    '&language=fr&query=' + text  
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }