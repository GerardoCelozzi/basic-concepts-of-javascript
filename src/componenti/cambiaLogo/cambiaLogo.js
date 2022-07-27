

import './style.css'
import startImg from '../logo/webpack.jpg'
import anotherImg from './logojs.png'
//componente bottone

function buttonChangeLogo( {updateState}) {//passo le props guia spreddate quindi recupero solo il riferimento che mi interessa
    let count=1
    const button = document.createElement("button");
    button.className='block'
    button.innerText = 'cambia immagine'
   
    button.addEventListener('click',()=>{
   count++

   count%2===0?updateState(startImg):updateState(anotherImg)

       

    })
    const child=button
    return {child}
}

export default buttonChangeLogo