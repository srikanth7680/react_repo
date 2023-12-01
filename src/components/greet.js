import React from 'react'

//FUNCTIONAL COMPONENTS
// function Greet() {
//   return <h1>Hello srikanth</h1>
// }
//Arrow function 
const Greet = (props) => {
    return( 
    <div>
        <h1>Hello, {props.name} a.k.a {props.heroname}
        </h1>
    {props.children}
    </div>
    )
}
export default Greet;

//FunctionalComponents using props by {props.name}