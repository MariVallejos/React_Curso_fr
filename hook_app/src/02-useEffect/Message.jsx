
import { useEffect, useState } from "react"


export const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0})

    useEffect(() => {

        const onMouseMove = ({ x, y }) => { //desestrucuturo del evento x,y
            /* const coords = { x, y }
            setCoords(coords)  */
             setCoords({x,y}) 
        }


        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);  //quiero remover el mousemove y la referencia  a lo q deseeo eliminar
        }
    }, [])

    return (
        <>
            <h6>Usuario ya existe</h6>
            {JSON.stringify(coords)}


        </>
    )
}



