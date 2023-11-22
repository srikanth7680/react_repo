import React from "react";


//With JSX
// const Hola = () => {
//   return <h1>Hello,srikanth</h1>
// }
// export default Hola


//Without JSX
const Hola = () => {
  return React.createElement('div',{id: 'greet'},React.createElement('h1',{className:'new'},'Goodmorning'))
}
export default Hola;

