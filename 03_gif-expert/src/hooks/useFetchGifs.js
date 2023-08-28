import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category); //cuando ya tenga la respuesta 
        setImages(newImages); //actualiza las imagenes
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }
}

//Un hooks no es mas que una funcion, que retorna algo.



  