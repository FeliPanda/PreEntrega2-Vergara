let libros = [
    {
    titulo: "El Señor de los Anillos: La Comunidad del Anillo",
    autor: "J.R.R. Tolkien",
    fechaPublicacion: "29 de julio de 1954",
    paginas: 480,
    precio: 10000,
    cantidad: 10,
    oferta: false,
    },
    {
    titulo: "El Señor de los Anillos: Las Dos Torres",
    autor: "J.R.R. Tolkien",
    fechaPublicacion: "11 de noviembre de 1954",
    paginas: 416,
    precio: 8000,
    cantidad: 8,
    oferta:false,
    },
    {
    titulo: "El Señor de los Anillos: El Retorno del Rey",
    autor: "J.R.R. Tolkien",
    fechaPublicacion: "20 de octubre de 1955",
    paginas: 544,
    precio: 7000,
    cantidad: 12,
    oferta:false,
    },
    {
    titulo: "El Silmarillion",
    autor: "J.R.R. Tolkien",
    fechaPublicacion: "15 de septiembre de 1977",
    paginas: 368,
    precio: 12000,
    cantidad: 6,
    oferta:false,
    },
    {
    titulo: "Los Hijos de Hurin",
    autor: "J.R.R. Tolkien",
    fechaPublicacion: "17 de abril de 2007",
    paginas: 320,
    precio: 6000,
    cantidad: 3,
    oferta:false,
    }
];

function verOfertas  () {
    // let oferta = confirm ('¿quieres ver las ofertas de la tienda?');
    let librosEnOferta = libros.filter ((libro) => libro.oferta === true);
    if(librosEnOferta.length ===0){
        console.log("no hay ningún libro en oferta en este momento")
    }
// me costo un monton lo de como hacer para decir que un array esta vacio, o sea array.lenth=== 0, no se me habia ocurrido usar length, tuve que googlearlo!!

    else{
        librosEnOferta.forEach((libro) => {
        console.log (`libro en oferta: ${libro.titulo}, precio: ${libro.precio}`);
    });
    }
}


function comprarLibro(index, cantidad) {
    if (libros[index].cantidad >= cantidad) {
    libros[index].cantidad -= cantidad;
    console.log(`Has comprado ${cantidad} ejemplares de ${libros[index].titulo} por un valor de  ${libros[index].precio * cantidad} ARG . Stock disponible: ${libros[index].cantidad}`);
    } else {
    console.log(`Lo sentimos, no hay suficiente stock disponible para comprar ${cantidad} ejemplares de ${libros[index].titulo}. Stock disponible: ${libros[index].cantidad}`);
    }
}

// ver las ofertas de los libros
verOfertas();


// comprar 3 ejemplares del libro [3]"El Hobbit"
comprarLibro(1, 3);



