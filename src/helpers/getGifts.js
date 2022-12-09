export const getGifs = async(category) => {
    const apiKey = '7n87rV85Oy1zJ0smeqTzeo2CEz2NplK6';
    const limit = 20;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=7n87rV85Oy1zJ0smeqTzeo2CEz2NplK6&q=${category}&limit=${limit}`;
    const resp = await fetch(url);  
    const {data} = await resp.json();
    
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    // console.log(gifs);
    return gifs;
}