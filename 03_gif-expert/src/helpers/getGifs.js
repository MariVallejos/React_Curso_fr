//Consulta HTTP
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=XuDRXsHFmkJjOHJ5jIhCyQjmHDyQbCXM&q=${category}&limit=12`;
    const resp = await fetch(url);
    const { data } = await resp.json(); //desestructuto data

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
        // description: img.user.description
    }));

    return gifs; //retorna arrelo de gifs
}

