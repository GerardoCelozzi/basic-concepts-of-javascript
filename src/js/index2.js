
// const VERSION=1
// console.log("version : ",VERSION)

// import '../componenti/logo/style.css'
// //vogliamo importare componenti e aggiungerli alla pagina

// //importiamo componente logo
// import logoFn from '../componenti/logo/logo.js'
// import logoJs from '../componenti/cambiaLogo/logojs.png'
// import startImg from '../componenti/logo/webpack.jpg'
// import buttonChangeLogo from '../componenti/cambiaLogo/cambiaLogo'
// import header from './header'

// /**
//  * stile React
//  * Abbiamo una funzione che crea un elemento immagine
//  * e lo ritorna 
//  * il modulo componente immagine ha un export default
//  * quindi qui nel import possiamo dare un qualsiasi nome a quella funzione
//  * in questo entri poit agganciamo il componente al body
//  */

// //STILE REACT
// let url_prima_immagine = logoJs


// function createRoot(type, className) {//closure
//     //il root crea un scope in cui nodeElement è locale e non globale
//     //ma il div root conterrà tutta l app
//     const nodeElement = document.createElement(type)//creo il div
//     nodeElement.className = className

//     document.body.appendChild(nodeElement)//lo inserisco nel body 

//     return function childComponent(callback, data, type, text) { 
//         //ritorno una funzione per la creazione degli altri elementi interni a div root
//         //callback riferimento ai componenti creati per il momento statefull
     
   
//         let obj_after_create = null
//         if (type) {
//             const obj = document.createElement(type)
//             obj.innerText = text
//             obj_after_create = obj
//         }

//         if (callback) {//riferimenti a funzioni che ritornano i componenti da noi implementati
//             const props = { ...data }//tutte le proprieà che servono ai nostri componenti
//             const { child} = callback(props)
//             const obj = nodeElement.appendChild(child)
//             obj_after_create = obj
//         }


//         nodeElement.appendChild(obj_after_create)//agganciamo il nuovo componente
  
//     }
// }

// const childComponentCreate = createRoot('div', 'root') //ritorna la funzione di creazione degli elementi child in root
// /**
//  * l entry point è il container di tutta l app
//  * lui manipola lo stato da passare come prop ai sui child
//  */

// //funzione di stato per cambiare la ui del componente logo
// function stateChangeImage(urlImg) {
   
//     childComponentCreate(logoFn, { startImg: urlImg })
// }

// childComponentCreate(null, null, 'h1', 'js stile react')

// stateChangeImage(url_prima_immagine)//1 logojs



// childComponentCreate(buttonChangeLogo,{stateChangeImage})



