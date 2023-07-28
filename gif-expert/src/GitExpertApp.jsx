import { useState } from 'react';
import { AddCategory, GifGrid } from './components'; //aplico archivos de barril ( se creo en index.js) 


export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => { // creo la funcion y el parametro se lo paso en el otro componente como "valorInput"

        //Validar que sean unicos los valores
        //SI la categoria ya existe, no haga nada
        if (categories.includes(newCategory)) return;

        //SI no existe la categoria, inserta
        setCategories([newCategory, ...categories]); //uso spread operator, a mi array anterior sumale el nuevo
    }

    return (
        <>
            <h1>GitExpertApp</h1>

            {/* input */}
            <AddCategory onNewCategory={onAddCategory} />{/* Creo una prop, para pasar la funcion */}


            {/* LIstado de Gif */}
            {
                categories.map(category => (
                    <GifGrid
                        key={category}//llave
                        category={category}//category que mapeo //props

                    />
                ))
            }

        </>
    )
}



/* 
----Funcion Flecha----

(a) => {
    return ( a + 100)
  }


  -----------------------------------------------


----Funcion Flecha en React----

  (a) => (
     a + 100
     ); */
