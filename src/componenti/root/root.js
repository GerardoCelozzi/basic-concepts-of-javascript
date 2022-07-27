import './root.css'
//componenti funzionali in js
import ComponentLogo from '../logo/logo'
import bottone from '../cambiaLogo/cambiaLogo'

function createRoot() {//closure
    //il root crea un scope in cui nodeElement è locale e non globale
    //il div root conterrà tutta l app ,no routing
    const nodeElement = document.createElement('div')//creo il div
    nodeElement.className = 'root'

    document.body.appendChild(nodeElement)//lo inserisco nel body 

    /**
     * function childComponet
     * prende il riferimento ai componenti funzionali creati da me
     */
    return function childComponent(myFunctionalComponent, data) {
        //ritorno una funzione per la creazione degli altri elementi interni a div root
        //ho creato una closure perche mi serve che da qui possa raggiungere nodeElement che è il mio div root
        //myFunctionalComponent riferimento ai componenti creati 
        
        let obj_after_create = {}

        if (myFunctionalComponent) {//riferimenti a funzioni che ritornano i componenti da noi implementati

            const props = { ...data }//tutte le proprieà che servono ai nostri componenti

            const { child, updateState } = myFunctionalComponent(props)//ritorna il nodo e il riferimento
            //alla  funzione per aggiornare il suo stato interno

            const obj = nodeElement.appendChild(child)//agganciamo al nostro div root il componente funzionale
           
            obj_after_create = { obj, updateState }//ritorniamo il nodo creto nel caso in cui vogliamo agganciarci altri componenti
            // e riferimento updateState 
            //tale riferimento sara passato ai componenti funzionali che alla generazione di un evento 
            //devono cambiare lo stato di un altro componente 
            //passiamo il rifeirmento di updaState di componente y al componente x che tramite un evento generato su esso
            //nel suo handler invocando updateState va a modificare
            //lo stato del componente y
           
        }


        nodeElement.appendChild(obj_after_create.obj)//agganciamo il nuovo componente
        return obj_after_create//portiamo fuori dallo scope della closure i riferimenti al componente e alla sua funzione di stato
    }
}
//CREAZIONE UI PIU DEFINZIONE LOGICA DI ITERAZIONE TRA I COMPONENTI
const childComponentCreate = createRoot() //createRoot è una closure ritorna la funzione di creazione degli elementi child nel div root

const logo=childComponentCreate(ComponentLogo)//childComponent ritona il riferimento al elemento dom creato e il riferimento alla funzione
                                            // di aggiornamento  dello stato intenro del componente 
//il componente BOTTONE che segue prende nelle prop l updateState del componente LOGO 
//quando in bottone si genera  l evento onClick nell handler di gestione evento invochiamo  la funzione updateState del componente Logo

//bottone ne aggiunge porzioni di ui ne modifica il suo stato in funzione di eventi generati da altri componenti
// quindi non assegno l oggetto che ritorna mi basta invocare solo la funzione di creazione 
 childComponentCreate(bottone, {...logo })//destrutturando logo 
//il componente bottone avra il riferimento di updateStte perche logo è un oggetto con due prop la seconda è updateState



export default createRoot