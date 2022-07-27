//importiamo modulo path 
const path=require('path');
//importiamo plugin html
const HtmlWebpackPlugin=require('html-webpack-plugin')//ritorna una classe
//configurazione webpack
module.exports={
entry:{//entrypoint applicazione
 //lavoriamo con 2 entrypoit
   principale:'./src/js/index.js',
   secondario:'./src/js/index2.js'
},
output:{//cartella in cui inserisce il bundle
    path:path.resolve(__dirname,'dist'),//indichiamo in quale cartella inserire il bundle utilizzando un percorso assoluto
                                        //quindi utilizziamo il pacchetto path built in di node e utilizziamo la constante __dirname
    //1 filename:"bundle.js" //nominiamo il file bundle che inserirà in dist
    
    /*2 
    filename:"[name].bundle.js",
    cambio di sintassi per 2 entrypoit il name sarà principale e secondario
    cmq viene creato il file bundle quindi  aggiungiamo la prop clean:true
    */
    clean:true, //ogni volta che lanciamo la build i file precedenti vengono rimossi a ogni giro ripete tutta la creazione
                //ma per evitare di riempire la cache del browser modifichiamo ancora la sintassi della prop filename
    /** 3 */
     filename:"[name][contenthash].js"//cosi ogni volta che modificahiamo il contenuto di un entrypoint modifichiamo l hash del file
                                      //quindi webpack lo vede e rigenera il bundle solo per l entrypoint che ha subito la modifica
},
module :{rules:[
    {
        test:/\.(css|s[ac]ss)$/i,//tipo di file
        use:['style-loader','css-loader','sass-loader']//loader installati come pacchetti npm
    },
    {
        test:/\.(jpe?g|png|webp)$/i,
        //type:'asset/resource' utilizzando il loader di ottimizzazione img non abbiamo bisogno della prop type
        use:{
            loader:'img-optimize-loader',//questo pacchette permette di andare a lavorare in maniera puntale su ogni immagine
            //ma nn lo vediamo per ora
            //posiamo cambiare anche il formato in webp
            options:{
                compress:{
                    mode:'low'
                }
            }
        }
    },
    {
        test:/\.js$/i,
        exclude:/node_modules/, //non tocca i file js in node_modules
        use:{ //quando dobbiamo passare delle opzioni insieme al loader utilizziamo un oggetto
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-env']
            }
        }
   }
]},//loaders dentro rules indichiami quali loaders vogliamo utilizzare
plugins:[
    new HtmlWebpackPlugin({
        title:'Applicazione Webpack',
       // template:'./src/index.html' stile react nessun template utilizzato
    
    })//instanziamo la classe che ritorna dal pacchetto html-webpack-plugin 
    //prende un oggetto di configurazione il costruttore
],
devServer:{
    //port:5001,di default verra utilizzata la port =8080
    open:true,//apre direttamente il browser
    static:path.resolve(__dirname,'dist')//quale app il web server deve mostrare nel browser
    //noi vogliamo quindi mostrare il pacchetto creato da webpack all interno della cartella dist
},
mode:'none'

// mode='none' in base al comando che lancio vado in prod o in dev perche divido gli ambienti nel file package,json
//nell oggetto script
}

//se dal terminale lanciamo questo modulo
//node webpack.config.js
console.log("percorso assoluto : ",__dirname)//stampera il percorso assoluto con __filename anche nome file