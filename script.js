// productos
// Los precios de los mangas usualmente se comparten entre tomos de la misma franquicia, con leves excepciones

// Shaman king - panini mexico
let shmkPan = "Shaman king - Panini Mexico - $16.990 c/u";
const shmkPanPrecio = 16990;


let shmkPan1 = "Shaman king - Tomo 1";
let shmkPan1Stock = 22;

let shmkPan2 = "Shaman king - Tomo 2";
let shmkPan2Stock = 3;

let shmkPan3 = "Shaman king - Tomo 3";
let shmkPan3Stock = 0;

let shmkPan4 = "Shaman king - Tomo 4";
let shmkPan4Stock = 10;

// Vinland saga - Ovnipress
let vdsgOp = "Vinland Saga - Ovnipress Argentina - $15.490 c/u";
const vdsgOpPrecio = 15490;


let vdsgOp1 = "Vinland Saga - Tomo 1";
let vdsgOp1Stock = 11;

let vdsgOp2 = "Vinland Saga - Tomo 2";
let vdsgOp2Stock = 5;

let vdsgOp3 = "Vinland Saga - Tomo 3";
let vdsgOp3Stock = 30;

// Tokyo Revengers - Ivrea Argentina
let tkrvIvr = "Tokyo Revengers - Ivrea Argentina - $9.990 c/u";
const tkrvIvrPrecio = 9990;


let tkrvIvr1 = "Tokyo Revengers - Tomo 1";
let tkrvIvr1Stock = 16;

let tkrvIvr2 = "Tokyo Revengers - Tomo 2";
let tkrvIvr2Stock = 0;

let tkrvIvr3 = "Tokyo Revengers - Tomo 3";
let tkrvIvr3Stock = 3;

let tkrvIvr4 = "Tokyo Revengers - Tomo 4";
let tkrvIvr4Stock = 12;

// fin de los productos

let tomo = 0;
let precioTotal = 0;


sistemaCompra: do {
    let = opcion = prompt("Ingrese el numero de la franquicia que desea comprar:\n1.-" + shmkPan + "\n2.-" + vdsgOp + "\n3.-" + tkrvIvr + "\n0.- Cancelar Compra \n\nEscribe CONFIRMAR para finalizar la compra ").toLowerCase();

    // opcion = opcion.toLowerCase()

    switch (opcion) {
        // seleccion shaman king
        case "1":{
            let tomo = 0;
            tomo = prompt("Ingrese el n° del tomo que desea agregar:\nTomo / Stock\n1.-" + shmkPan1 + " / " + shmkPan1Stock + "\n2.-" + shmkPan2 + " / " + shmkPan2Stock + "\n3.-" + shmkPan3 + " / " + shmkPan3Stock + "\n 4.-" + shmkPan4 + " / " + shmkPan4Stock);
            switch (tomo) {
                case "1": if (shmkPan1Stock > 0) {
                    precioTotal = precioTotal + shmkPanPrecio;
                    alert("Producto añadito al carrito con exito! \nEl valor de su carrito de compra es: $" + precioTotal + ".");
                    shmkPan1Stock = shmkPan1Stock - 1;

                }
                else {
                    alert("No tenemos este producto actualmente en stock");

                } break;


                case "2": if (shmkPan2Stock > 0) {
                    precioTotal = precioTotal + shmkPanPrecio;
                    alert("Producto añadito al carrito con exito! \nEl valor de su carrito de compra es: $" + precioTotal + ".");
                    shmkPan2Stock = shmkPan2Stock - 1;

                }
                else {
                    alert("No tenemos este producto actualmente en stock");

                } break;

                case "3": if (shmkPan3Stock > 0) {
                    precioTotal = precioTotal + shmkPanPrecio;
                    alert("Producto añadito al carrito con exito! \nEl valor de su carrito de compra es: $" + precioTotal + ".");
                    shmkPan3Stock = shmkPan3Stock - 1;

                }
                else {
                    alert("No tenemos este producto actualmente en stock");

                } break;

                case "4": if (shmkPan4Stock > 0) {
                    precioTotal = precioTotal + shmkPanPrecio;
                    alert("Producto añadito al carrito con exito! \nEl valor de su carrito de compra es: $" + precioTotal + ".");
                    shmkPan4Stock = shmkPan4Stock - 1;

                }
                else {
                    alert("No tenemos este producto actualmente en stock");

                } break;

                default:
                    alert("No tenemos ese tomo aun en stock!")
                } break;}

        // Seleccion Vinland Saga
        case "2":{
            tomo = prompt("Ingrese el n° del tomo que desea agregar:\nTomo / Stock\n1.-" + vdsgOp1 + " / " + vdsgOp1Stock + "\n2.-" + vdsgOp2 + " / " + vdsgOp2Stock + "\n3.-" + vdsgOp3 + " / " + vdsgOp3Stock);
            switch (tomo) {
                case "1": if (vdsgOp1Stock > 0) {
                    precioTotal = precioTotal + vdsgOpPrecio;
                    alert("Producto añadito al carrito con exito! \nEl valor de su carrito de compra es: $" + precioTotal + ".");
                    vdsgOp1Stock = vdsgOp1Stock - 1;

                }
                else {
                    alert("No tenemos este producto actualmente en stock");

                } break;

                case "2": if (vdsgOp2Stock > 0) {
                    precioTotal = precioTotal + vdsgOpPrecio;
                    alert("Producto añadito al carrito con exito! \nEl valor de su carrito de compra es: $" + precioTotal + ".");
                    vdsgOp2Stock = vdsgOp2Stock - 1;

                }
                else {
                    alert("No tenemos este producto actualmente en stock");

                } break;

                case "3": if (vdsgOp3Stock > 0) {
                    precioTotal = precioTotal + shmkPanPrecio;
                    alert("Producto añadito al carrito con exito! \nEl valor de su carrito de compra es: $" + precioTotal + ".");
                    vdsgOp3Stock = vdsgOp3Stock - 1;

                }
                else {
                    alert("No tenemos este producto actualmente en stock");

                } break;

                default:
                    alert("No tenemos ese tomo aun en stock!")
                }  break;}

        // seleccion Tokyo Revengers - Ivrea Argentina
        case "3":{
            tomo = prompt("Ingrese el n° del tomo que desea agregar:\nTomo / Stock\n1.-" + tkrvIvr1 + " / " + tkrvIvr1Stock + "\n2.-" + tkrvIvr2 + " / " + tkrvIvr2Stock + "\n3.-" + tkrvIvr3 + " / " + tkrvIvr3Stock + "\n 4.-" + tkrvIvr4 + " / " + tkrvIvr4Stock);
            switch (tomo) {
                case "1": if (tkrvIvr1Stock > 0) {
                    precioTotal = precioTotal + tkrvIvrPrecio;
                    alert("Producto añadito al carrito con exito! \nEl valor de su carrito de compra es: $" + precioTotal + ".");
                    tkrvIvr1Stock = tkrvIvr1Stock - 1;

                }
                else {
                    alert("No tenemos este producto actualmente en stock");

                } break;

                case "2": if (tkrvIvr2Stock > 0) {
                    precioTotal = precioTotal + tkrvIvrPrecio;
                    alert("Producto añadito al carrito con exito! \nEl valor de su carrito de compra es: $" + precioTotal + ".");
                    tkrvIvr2Stock = tkrvIvr2Stock - 1;

                }
                else {
                    alert("No tenemos este producto actualmente en stock");

                } break;

                case "3": if (tkrvIvr3Stock > 0) {
                    precioTotal = precioTotal + tkrvIvrPrecio;
                    alert("Producto añadito al carrito con exito! \nEl valor de su carrito de compra es: $" + precioTotal + ".");
                    tkrvIvr3Stock = tkrvIvr3Stock - 1;

                }
                else {
                    alert("No tenemos este producto actualmente en stock");

                } break;

                case "4": if (tkrvIvr4Stock > 0) {
                    precioTotal = precioTotal + tkrvIvrPrecio;
                    alert("Producto añadito al carrito con exito! \nEl valor de su carrito de compra es: $" + precioTotal + ".");
                    tkrvIvr4Stock = tkrvIvr4Stock - 1;

                } 
                else {
                    alert("No tenemos este producto actualmente en stock");

                } break;

                default:
                    alert("No tenemos ese tomo aun en stock!")
                }  break;}

        case "confirmar":{
            alert("El total de su compra es: $" + precioTotal + "\nEl IVA de su compra es: $" + (precioTotal*0.19));
            break;}break;

        case "0":
            alert("Compra Cancelada!"); break sistemaCompra;
            

        default:
            alert("Opcion invalida"); break;

    }
}while (opcion != "confirmar" ) {
    alert("Muchas gracias por visitarnos!")
}

