import { useLayoutEffect, useRef, useState } from "react";


export const Quote = ({ quote, author }) => {

  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({width:0, height:0});

  
  useLayoutEffect(() => {

    // console.log(pRef.current.getBoundingClientRect()); 
    const { height, width } =  pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
    
  }, [quote])


  return (
    <>
      <blockquote className="blockquote text-end"
        style={{ display: 'flex' }}>
        <p ref={pRef} className="mb-1">{quote}</p>
        <footer className="blockquote-footer mt-1">{author}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>

  )
}


//NOTA

//useLayoutEffect es simil al useEffect, es recomendable usar useEffect.

//current, captura valor actual

//getBoundingClientReact

/*  Como es un elementp htm , tengo acceso a cualquier elemento.
getBoundingClientRect() => me da toda la info de tamaño, posicion .

Solo tomo el height, width

*/


