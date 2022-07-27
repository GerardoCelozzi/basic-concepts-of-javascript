import logoFn from '../componenti/logo/logo.js'
import logoJs from '../componenti/cambiaLogo/logojs.png'
import startImg from '../componenti/logo/webpack.jpg'
import buttonChangeLogo from '../componenti/cambiaLogo/cambiaLogo'

function header(nodeElement) {
    //initail State relativo al componente logo che prende come prop il source dell imagine
    //no immutabilità
    let first = startImg

    //gestione State
    //cambia il valore di state
     function changeImg(src) {

        src === startImg ? first = logoJs : first = startImg
        return logoFn(first)
        /**
         * logoFn ritorna nello scope di changeImg che è nello scope di appenChild che nello scope di document.body
         */
    }

    //construiamo la vista 
    nodeElement.appendChild(changeImg(logoJs))
    const button1 = nodeElement.appendChild(buttonChangeLogo())
    button1.addEventListener('click', (event) => {
        changeImg(first)

    })
}
export default header;