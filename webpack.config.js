  //plugin de html que estara mandando el codigo a la carpeta dist
const HtmlWebPackPlugin=require("html-webpack-plugin");
module.exports={
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
        ],
    },
  
    plugins:[
        new HtmlWebPackPlugin({ //pasamos las propiedades
            template:"./src/index.html", //declaramos nuestro archivo html base en el que se va a basar
            filename:"./index.html",//como quiero que se llame el archivo en mi carpeta de dist
        }),
    ],
};