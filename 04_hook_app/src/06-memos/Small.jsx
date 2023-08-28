// import { memo } from "react";
import React from 'react';


export const Small = React.memo(({value}) => { //prop.value

    console.log('Me volvi a dibu :(');
  return (
    <>
    <small>{value}</small>
    </>
  )
});




/* import { memo } from "react";


export const Small = memo(({value}) => { //prop.value

    console.log('Me volvi a dibu :(');
  return (
    <>
    <small>{value}</small>
    </>
  )
}) */  // esta es una forma de hacerlo 
