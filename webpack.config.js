module.exports={
    //el archivo de configuracion de webpack es un objecto con ciertas caracteristicas
    //module carga las caracteristicas entre ellas las rules y ellas van a ser un array y por cada elemento puede ser una cadena de texto o un objeto
    
    //con esta transpilacion ya debe fuincionar la transpilacion con babel
    module:{
        rules:[
            {
                test:/\.js$/i, //le decimos que archivos son en los que voy a trabajar esta regla(todos los archivos que tengan extencion js"" expresion regular")
                exclude:/node_module/, //decirle que carpetas excluya
                use:"babel-loader" //indica cual es la regla que vamos a usar
            }
        ]
    }
}