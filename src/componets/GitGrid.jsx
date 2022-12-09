// import { useEffect, useState } from 'react';
// import { getGifs } from '../helpers/getGifts';
import useFetchGif from '../hooks/useFetchGif';
import GifItem from './GifItem';

export const GitGrid = ({category}) => {

    // const [counter, setCounter] = useState(1);

    const {images, isLoading} = useFetchGif(category);

    // const [images , setImages] = useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // } 

    // useEffect(() => {
    //     getImages();
    // }, []);
    

    return (
        <>
            <h2>{category}</h2>
            {/* <ol> */}

            {
                isLoading && (<h3>Cargando...</h3>)
            }

            <div className="card-grid">
                {
                    images.map( (image)  => (
                        // return <li key={id}>{title}</li>
                        <GifItem 
                            key={image.id}
                            { ...image }
                        />
                    ))
                }
            </div>
            
            {/* </ol> */}
            {/* <h5>{counter}</h5> */}
            {/* <button onClick={ () => { setCounter(counter + 1)} }> + 1</button> */}
        </>
        
    )
}

// export default GitGrid;