// productos
// Los precios de los mangas usualmente se comparten entre tomos de la misma franquicia, con leves excepciones


// Funciones
class Producto {
    constructor(id, franquicia, tomo, stock, precio) {
        this.id = id
        this.franquicia = franquicia
        this.tomo = tomo
        this.stock = stock
        this.precio = precio
    }

    restarStock() {
        this.stock = this.stock - 1;
    }

}

function actualizar (listado, objetos){
    listado.length = 0
    for(const tomo of objetos){
        listado.push("\n" + tomo.id + ".- " + tomo.franquicia + " " + tomo.tomo + " (" +  tomo.stock + ") $" + tomo.precio)
    }
}

class Franquicia {
    constructor(id, nombre, editorial, precio) {
        this.id = id
        this.nombre = nombre
        this.editorial = editorial
        this.precio = precio
    }

}

let menuA = new Franquicia ("1", "Shaman King", "Editorial Panini Mexico", 16990)
let menuB = new Franquicia ("2", "Vinalnd Saga", "Editorial OvniPress", 14990)
let menuC = new Franquicia ("3", "Tokyo Revengers", "Ivrea Argentina", 9990)

let franquicias = [menuA, menuB, menuC];
let listaFranquicias = []

for(const franq of franquicias){
    listaFranquicias.push("\n" + franq.id + ".- " + franq.nombre + " " + franq.editorial + " $" + franq.precio)
}

// Shaman king - panini mexico
// let shmkPan = "Shaman king - Panini Mexico - $16.990 c/u";
// const shmkPanPrecio = 16990;
//ID DE FRANQUICIA ES [0]

let shmkPan1 = new Producto ("1", "Shaman King", "Tomo 1", 15, franquicias[0].precio);
let shmkPan2 = new Producto ("2","Shaman King", "Tomo 2", 3, franquicias[0].precio);
let shmkPan3 = new Producto ("3","Shaman King", "Tomo 3", 0, franquicias[0].precio);
let shmkPan4 = new Producto ("4","Shaman King", "Tomo 4", 2, franquicias[0].precio);
let shmkPan5 = new Producto ("5","Shaman King", "Tomo 5", 10, franquicias[0].precio);
let productoShmkPan = [shmkPan1, shmkPan2, shmkPan3, shmkPan4, shmkPan5];
let listaShmkPan = []

for(const tomo of productoShmkPan){
    listaShmkPan.push("\n" + tomo.id + ".- " + tomo.franquicia + " " + tomo.tomo + " (" +  tomo.stock + ") $" + tomo.precio)
}


// for (const producto of productos) {
//     console.log(producto.franquicia, producto.tomo + " stock: " + producto.stock + " Precio: $" + producto.precio)
// }

// let shmkPan1 = new Producto("Shaman king Tomo 1", 15, shmkPanPrecio)
// let shmkPan2 = new Producto("Shaman king Tomo 2", 3, shmkPanPrecio)
// let shmkPan3 = new Producto("Shaman king Tomo 3", 0, shmkPanPrecio)
// let shmkPan4 = new Producto("Shaman king Tomo 4", 2, shmkPanPrecio)
// let shmkPan5 = new Producto("Shaman king Tomo 5", 10, shmkPanPrecio)

// Vinland saga - Ovnipress
let vdsgOp = "Vinland Saga - Ovnipress Argentina - $15.490 c/u";
const vdsgOpPrecio = 15490;

let vdsgOp1 = new Producto ("1", "Vinland Saga", "Tomo 1", 11, franquicias[1].precio);
let vdsgOp2 = new Producto ("2", "Vinland Saga", "Tomo 2", 2, franquicias[1].precio);
let vdsgOp3 = new Producto ("3", "Vinland Saga", "Tomo 3", 12, franquicias[1].precio);
let vdsgOp4 = new Producto ("4", "Vinland Saga", "Tomo 4", 3, franquicias[1].precio);
let vdsgOp5 = new Producto ("5", "Vinland Saga", "Tomo 5", 6, franquicias[1].precio);
let productoVdsgOp = [vdsgOp1, vdsgOp2, vdsgOp3, vdsgOp4, vdsgOp5];
let listaVdsgOP = []

for(const tomo of productoVdsgOp){
    listaVdsgOP.push("\n" + tomo.id + ".- " + tomo.franquicia + " " + tomo.tomo + " (" +  tomo.stock + ") $" + tomo.precio)
}


// let vdsgOp1 = new Producto("Vinland Saga Tomo 1", 11, vdsgOpPrecio)
// let vdsgOp2 = new Producto("Vinland Saga Tomo 2", 2, vdsgOpPrecio)
// let vdsgOp3 = new Producto("Vinland Saga Tomo 3", 12, vdsgOpPrecio)
// let vdsgOp4 = new Producto("Vinland Saga Tomo 4", 3, vdsgOpPrecio)

// Tokyo Revengers - Ivrea Argentina
let tkrvIvr = "Tokyo Revengers - Ivrea Argentina - $9.990 c/u";
const tkrvIvrPrecio = 9990;

let tkrvIvr1 = new Producto("Tokyo Revengers Tomo 1", 22, tkrvIvrPrecio)
let tkrvIvr2 = new Producto("Tokyo Revengers Tomo 2", 2, tkrvIvrPrecio)
let tkrvIvr3 = new Producto("Tokyo Revengers Tomo 3", 0, tkrvIvrPrecio)
let tkrvIvr4 = new Producto("Tokyo Revengers Tomo 4", 3, tkrvIvrPrecio)
let tkrvIvr5 = new Producto("Tokyo Revengers Tomo 5", 12, tkrvIvrPrecio)

// fin de los productos

let tomo = 0;
let precioTotal = 0;


sistemaCompra: do {
    //  let = opcion = prompt("Ingrese el numero de la franquicia que desea comprar:\n1.-" + shmkPan + "\n2.-" + vdsgOp + "\n3.-" + tkrvIvr + "\n0.- Cancelar Compra \n\nEscribe CONFIRMAR para finalizar la compra ").toLowerCase();

     let = opcion = prompt("Ingrese el numero de la franquicia que desea comprar:" + listaFranquicias.join(" ") +  "\n0.- Cancelar Compra \n\nEscribe CONFIRMAR para finalizar la compra").toLowerCase();

    switch (opcion) {
        // seleccion shaman king
        case "1": {
            tomo = prompt("Ingrese el n° del tomo que desea agregar:\nTomo / Stock / Precio" + listaShmkPan.join(" "));
            switch (tomo) {
                case "1": if (shmkPan1.stock > 0) {
                    precioTotal = precioTotal + shmkPan1.precio;
                    alert("Producto añadito al carrito con exito! \nEl valor de su carrito de compra es: $" + precioTotal + ".");
                    shmkPan1.restarStock();
                    actualizar(listaShmkPan, productoShmkPan)

                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;


                case "2": if (shmkPan2.stock > 0) {
                    precioTotal = precioTotal + shmkPan2.precio;
                    alert("Producto añadito al carrito con exito! \nEl valor de su carrito de compra es: $" + precioTotal + ".");
                    shmkPan2.restarStock();
                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;

                case "3": if (shmkPan3.stock > 0) {
                    precioTotal = precioTotal + shmkPan3.precio;
                    alert("Producto añadito al carrito con exito! \nEl valor de su carrito de compra es: $" + precioTotal + ".");
                    shmkPan3.restarStock();
                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;


                case "4": if (shmkPan4.stock > 0) {
                    precioTotal = precioTotal + shmkPan4.precio;
                    alert("Producto añadito al carrito con exito! \nEl valor de su carrito de compra es: $" + precioTotal + ".");
                    shmkPan4.restarStock();
                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;

                case "5": if (shmkPan5.stock > 0) {
                    precioTotal = precioTotal + shmkPan5.precio;
                    alert("Producto añadito al carrito con exito! \nEl valor de su carrito de compra es: $" + precioTotal + ".");
                    shmkPan5.restarStock();
                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;


                default:
                    alert("No tenemos ese tomo aun en stock!")
            } break;
        }
        // Seleccion Vinland Saga
        case "2": {
            tomo = prompt("Ingrese el n° del tomo que desea agregar:\nTomo / Stock / Precio" + listaVdsgOP.join(" "));
            switch (tomo) {
                case "1": if (vdsgOp1.stock > 0) {
                    precioTotal = precioTotal + vdsgOp1.precio;
                    alert("Producto añadito al carrito con exito! \nEl valor de su carrito de compra es: $" + precioTotal + ".");
                    vdsgOp1.restarStock();
                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;

                case "2": if (vdsgOp2.stock > 0) {
                    precioTotal = precioTotal + vdsgOp2.precio;
                    alert("Producto añadito al carrito con exito! \nEl valor de su carrito de compra es: $" + precioTotal + ".");
                    vdsgOp2.restarStock();
                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;

                case "3": if (vdsgOp3.stock > 0) {
                    precioTotal = precioTotal + vdsgOp3.precio;
                    alert("Producto añadito al carrito con exito! \nEl valor de su carrito de compra es: $" + precioTotal + ".");
                    vdsgOp3.restarStock();
                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;

                case "4": if (vdsgOp4.stock > 0) {
                    precioTotal = precioTotal + vdsgOp4.precio;
                    alert("Producto añadito al carrito con exito! \nEl valor de su carrito de compra es: $" + precioTotal + ".");
                    vdsgOp4.restarStock();
                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;

                default:
                    alert("No tenemos ese tomo aun en stock!")
            }  break;
        }

        // seleccion Tokyo Revengers - Ivrea Argentina
        case "3": {
            tomo = prompt("Ingrese el n° del tomo que desea agregar:\nTomo / Stock\n1.-" + tkrvIvr1.nombre + " / " + tkrvIvr1.stock + "\n2.-" + tkrvIvr2.nombre + " / " + tkrvIvr2.stock + "\n3.-" + tkrvIvr3.nombre + " / " + tkrvIvr3.stock + "\n 4.-" + tkrvIvr4.nombre + " / " + tkrvIvr4.stock + "\n 5.-" + tkrvIvr5.nombre + " / " + tkrvIvr5.stock);
            switch (tomo) {
                case "1": if (tkrvIvr1.stock > 0) {
                    precioTotal = precioTotal + tkrvIvr1.precio;
                    alert("Producto añadito al carrito con exito! \nEl valor de su carrito de compra es: $" + precioTotal + ".");
                    tkrvIvr1.restarStock();
                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;

                case "2": if (tkrvIvr2.stock > 0) {
                    precioTotal = precioTotal + tkrvIvr2.precio;
                    alert("Producto añadito al carrito con exito! \nEl valor de su carrito de compra es: $" + precioTotal + ".");
                    tkrvIvr2.restarStock();
                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;

                case "3": if (tkrvIvr3.stock > 0) {
                    precioTotal = precioTotal + tkrvIvr3.precio;
                    alert("Producto añadito al carrito con exito! \nEl valor de su carrito de compra es: $" + precioTotal + ".");
                    tkrvIvr3.restarStock();
                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;

                case "4": if (tkrvIvr4.stock > 0) {
                    precioTotal = precioTotal + tkrvIvr4.precio;
                    alert("Producto añadito al carrito con exito! \nEl valor de su carrito de compra es: $" + precioTotal + ".");
                    tkrvIvr4.restarStock();
                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;

                case "5": if (tkrvIvr5.stock > 0) {
                    precioTotal = precioTotal + tkrvIvr5.precio;
                    alert("Producto añadito al carrito con exito! \nEl valor de su carrito de compra es: $" + precioTotal + ".");
                    tkrvIvr5.restarStock();
                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;

                default:
                    alert("No tenemos ese tomo aun en stock!")
            }  break;
        }

        case "confirmar": {
            alert("El total de su compra es: $" + precioTotal + "\nEl IVA de su compra es: $" + (precioTotal * 0.19));
            break;
        }

        case "0":
            alert("Compra Cancelada!"); break sistemaCompra;


        default:
            alert("Opcion invalida"); break;

    }
} while (opcion != "confirmar") {
    alert("Muchas gracias por visitarnos!")
}

