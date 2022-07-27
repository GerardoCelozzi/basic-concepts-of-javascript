
import './style.css'
import srcImg from './webpack.jpg'

const logoDomImage = new Image()//nuovo elemento immagine


function logo( props ) {
  
   const setState = function (value) {//setState utilizata nel contesto di state dove viene referenziata
      //vede la prop src
   
      this.src = value
   }
   const state = {
      src: srcImg,
      aggiorna: setState
   }

   const updateState = function (value) {//viene invocata nell handle del componente BOTTONE
      //BOTTONE passa source dell imagine che si alternano 
      
                                          
      state.aggiorna(value)//triggera setState passandogli value 
      aggiornaSource()//aggiornato il valore di src nello state la funzione  aggiorna la prop src dell oggetto image
   }
   const aggiornaSource=function(){
      logoDomImage.src = state.src
   }
   
   logoDomImage.src = state.src
   logoDomImage.className = 'my-logo '

   const child = logoDomImage

   return { child, updateState }//ritorniamo l elemento dom creato e il riferimento alla funzione per aggiornare lo stato interno 
                                 //del componente
}

export default logo

/**
 * il componente inteso come porzione dell ui
 * è autosufficiente
 * la cartella in cui questa funzione che ritorna un node del dom
    incapsula la logica per rendere un immagine 
    utilizzando il dom all interno dell entrypoit 
    e agganciando questo componente dentro di esso
    webpack per mezzo del plugin html definito nelle prop di webpack config
    vede l oggetto dom
    genera il file html nell output 
    collegando il bundle
 * 
    quindi in un altro progetto possiamo riutilizzare la porzione di ui
    copiando la cartella 
    la importiamo nell entrypoint del nuovo progetto
    e il gioco è fatto 
 */