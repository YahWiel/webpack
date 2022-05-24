  //plugin de html que estara mandando el codigo a la carpeta dist
const HtmlWebPackPlugin=require("html-webpack-plugin"),
miniCssExtractPlugin=require("mini-css-extract-plugin");

module.exports={
    entry:{ //definimos un objecto entry
        //definimos nnuetras entradas(OJO TODOS MIS PUNTOS DE ENTRADA TIENEN QUE SER ARCHIVOS JS); tenemos que ya crealo
        js:"./src/index.js", //el punto de entrada sera el predeterminado  de mi carpeta src
        react:"./src/index_react.js",  
        ts:"./src/index_ts.js"
        //ojo si dese que impacten en un aarchivo de html diferente tengo que crearlo en mi plugin de html
    },
    output:{//definimos un objecto output, que sera de manera automatica como en los archivos
        filename:"[name].[chunkhash].js"   //hacemos que la salida sea dinamica (tomara el nombre del archivo que tenga como referencia en la entrada)
       //[nombre del archivo(react,js,ts)].[webpack permite fenerar chucko hash que son como codigos, que cada que hagamos un build, salga como u nombre diferente del archivo].js (ya que compilara a js)
    },
    //el archivo de configuracion de webpack es un objecto con ciertas caracteristicas
    //module carga las caracteristicas entre ellas las rules y ellas van a ser un array y por cada elemento puede ser una cadena de texto o un objeto
    
    //con esta transpilacion ya debe fuincionar la transpilacion con babel
    //OJO CADA LOADER ES COMO UN PAQUETE uUN PLUGIN?
    module:{
        rules:[
            {
                test:/\.js$/i, //le decimos que archivos son en los que voy a trabajar esta regla(todos los archivos que tengan extencion js"" expresion regular")
                exclude:/node_modules/, //decirle que carpetas excluya
                use:{
                    loader:"babel-loader", //indica cual es la regla que vamos a usar
                },
            },
            {
                //laoder de html
                test:/\.html$/i,
                use:[
                    { 
                        loader:"html-loader", //(las opciones lo podemos agregar como paramateros de una URL) las como esta en nuestro archivo package.json?
                        options:{
                            minimize:true// significa que cuando el archivo html pase la compilacion de webpack me lo entregue minificado en la carpeta dist
                        }
                    },
                ],
            },
            {
                test:/\.css$/i,
                /* use:[miniCssExtractPlugin.loader,"css-loader"] solo cons esto tenemos un problema con la funcion url en css */
                use:[
                    {
                        loader:miniCssExtractPlugin.loader, //su loader
                        options:{ //para no tener problemas al llamar la funcion url, necesitamos definir el publicPath 
                            //el error al ejecutar "build" sin esto esque webpack no sabe a donde llevar los archivosque manda a llamar mi style con sus funciones URL,
                            //asi que nosotros necesitamos definir explicitamente el publicPath y podemos definir la ruta
                            publicPath:"./" //le quiero decir que el publicPath es tal cual como esta en la carpeta
                        }   
                    },
                    "css-loader"
                ]    
            },
            {
                test:/\.(jpe?g|png|gif|svg|webp)$/i,
                use:["file-loader?name=assets/[name].[ext]","image-webpack-loader"], //le estoy diciendo que va a formar una carpeta llamada "assets" y en ella va  guardar los archivos; los[] hace referencia a que tomara el nombre del archivo
            },
        ],
    },
  
    plugins:[
        /* new HtmlWebPackPlugin({ //pasamos las propiedades
            template:"./src/index.html", //declaramos nuestro archivo html base en el que se va a basar
            filename:"./index.html",//como quiero que se llame el archivo en mi carpeta de dist
        }), */
        new HtmlWebPackPlugin({
            template:"./src/index.html",  //ARCHIVO BASE 
            filename:"./index.html", 
            chunks:["js"], //declaramos el chunk del punto de  entrada al cual pertenece //los chunk son el atributo que le pusimos a las propiedades del objeto de las entry
            hash:true
        }),
        new HtmlWebPackPlugin({
            template:"./src/index.html",  //ARCHIVO BASE o podemos crear otro para react
            filename:"./react.html", 
            chunks:["react"], //declaramos el chunk del punto de  entrada al cual pertenece //los chunk son el atributo que le pusimos a las propiedades del objeto de las entry
            hash:true
        }),
        new HtmlWebPackPlugin({
            template:"./src/index.html",  //ARCHIVO BASE o podemos crear otro para ts
            filename:"./ts.html", 
            chunks:["ts"], //declaramos el chunk del punto de  entrada al cual pertenece //los chunk son el atributo que le pusimos a las propiedades del objeto de las entry
            hash:true
        }),
        new miniCssExtractPlugin(),
    ],
};