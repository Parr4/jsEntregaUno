// productos
// Los precios de los mangas usualmente se comparten entre tomos de la misma franquicia, con leves excepciones


// Funciones
// constructores
class Producto {
    constructor(id, franquicia, tomo, stock, precio) {
        this.id = id
        this.franquicia = franquicia
        this.tomo = tomo
        this.stock = stock
        this.precio = precio
    }

    restarStock(listado, objetos) {
        this.stock = this.stock - 1;
        actualizar(listado, objetos);
        carroCompra.push(this);
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
// funciones de acciones

// Generador de listado de productos
function armadoLista(objetos, listado){
    for (const tomo of objetos) {
        listado.push("\n" + tomo.id + ".- " + tomo.franquicia + " " + tomo.tomo + " (" + tomo.stock + ") $" + tomo.precio)
    }
}

// Actualizacion de listado y stock
function actualizar(listado, objetos) {
    listado.length = 0
    for (const tomo of objetos) {
        listado.push("\n" + tomo.id + ".- " + tomo.franquicia + " " + tomo.tomo + " (" + tomo.stock + ") $" + tomo.precio)
    }
}

// suma + display del total de la compra
function productoAgregado(precioProducto) {
    precioTotal = precioTotal + precioProducto;
    alert("Producto añadito al carrito con exito! \nEl valor de su carrito de compra es: $" + precioTotal + ".");
}

// funcion display de carro completo
let carroCompra = []
let listadoCompra = []
let i = 1;
function CompraTotal() {
    for (const tomo of carroCompra) {
    listadoCompra.push("\n" + i + ".- " + tomo.franquicia + " " + tomo.tomo + " $" + tomo.precio);
    i = i + 1;
}}




// franquicias para el menu
let menuA = new Franquicia("1", "Shaman King", "Editorial Panini Mexico", 16990)
let menuB = new Franquicia("2", "Vinalnd Saga", "Editorial OvniPress", 14990)
let menuC = new Franquicia("3", "Tokyo Revengers", "Ivrea Argentina", 9990)

let franquicias = [menuA, menuB, menuC];
let listaFranquicias = []

for (const franq of franquicias) {
    listaFranquicias.push("\n" + franq.id + ".- " + franq.nombre + " " + franq.editorial + " $" + franq.precio)
}

// Productos shaman king
let shmkPan1 = new Producto("1", "Shaman King", "Tomo 1", 15, franquicias[0].precio);
let shmkPan2 = new Producto("2", "Shaman King", "Tomo 2", 3, franquicias[0].precio);
let shmkPan3 = new Producto("3", "Shaman King", "Tomo 3", 0, franquicias[0].precio);
let shmkPan4 = new Producto("4", "Shaman King", "Tomo 4", 2, franquicias[0].precio);
let shmkPan5 = new Producto("5", "Shaman King", "Tomo 5", 10, franquicias[0].precio);
let productoShmkPan = [shmkPan1, shmkPan2, shmkPan3, shmkPan4, shmkPan5];
let listaShmkPan = []

armadoLista(productoShmkPan, listaShmkPan)


// Vinland saga - Ovnipress
let vdsgOp = "Vinland Saga - Ovnipress Argentina - $15.490 c/u";
const vdsgOpPrecio = 15490;

let vdsgOp1 = new Producto("1", "Vinland Saga", "Tomo 1", 11, franquicias[1].precio);
let vdsgOp2 = new Producto("2", "Vinland Saga", "Tomo 2", 2, franquicias[1].precio);
let vdsgOp3 = new Producto("3", "Vinland Saga", "Tomo 3", 12, franquicias[1].precio);
let vdsgOp4 = new Producto("4", "Vinland Saga", "Tomo 4", 3, franquicias[1].precio);
let vdsgOp5 = new Producto("5", "Vinland Saga", "Tomo 5", 6, franquicias[1].precio);
let productoVdsgOp = [vdsgOp1, vdsgOp2, vdsgOp3, vdsgOp4, vdsgOp5];
let listaVdsgOP = []

armadoLista(productoVdsgOp, listaVdsgOP)

// Tokyo Revengers - Ivrea Argentina
let tkrvIvr = "Tokyo Revengers - Ivrea Argentina - $9.990 c/u";
const tkrvIvrPrecio = 9990;

let tkrvIvr1 = new Producto("1", "Tokyo Revengers", "Tomo 1", 5, franquicias[2].precio);
let tkrvIvr2 = new Producto("2", "Tokyo Revengers", "Tomo 2", 15, franquicias[2].precio);
let tkrvIvr3 = new Producto("3", "Tokyo Revengers", "Tomo 3", 3, franquicias[2].precio);
let tkrvIvr4 = new Producto("4", "Tokyo Revengers", "Tomo 1", 11, franquicias[2].precio);
let tkrvIvr5 = new Producto("5", "Tokyo Revengers", "Tomo 1", 12, franquicias[2].precio);
let productoTkrvIvr = [tkrvIvr1, tkrvIvr2, tkrvIvr3, tkrvIvr4, tkrvIvr5];
let listaTkrvIvr = []

armadoLista(productoTkrvIvr, listaTkrvIvr)

// fin de los productos

let tomo = 0;
let precioTotal = 0;


sistemaCompra: do {


    let = opcion = prompt("Ingrese el numero de la franquicia que desea comprar:" + listaFranquicias.join(" ") + "\n0.- Cancelar Compra \n\nEscribe CONFIRMAR para finalizar la compra").toLowerCase();

    switch (opcion) {
        // seleccion shaman king
        case "1": {
            tomo = prompt("Ingrese el n° del tomo que desea agregar:\nTomo / Stock / Precio" + listaShmkPan.join(" "));
            switch (tomo) {
                case "1": if (shmkPan1.stock > 0) {
                    productoAgregado(shmkPan1.precio)
                    shmkPan1.restarStock(listaShmkPan, productoShmkPan);

                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;


                case "2": if (shmkPan2.stock > 0) {
                    productoAgregado(shmkPan2.precio)
                    shmkPan2.restarStock(listaShmkPan, productoShmkPan);
                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;

                case "3": if (shmkPan3.stock > 0) {
                    productoAgregado(shmkPan3.precio)
                    shmkPan3.restarStock(listaShmkPan, productoShmkPan);
                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;


                case "4": if (shmkPan4.stock > 0) {
                    productoAgregado(shmkPan4.precio)
                    shmkPan4.restarStock(listaShmkPan, productoShmkPan);
                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;

                case "5": if (shmkPan5.stock > 0) {
                    productoAgregado(shmkPan5.precio)
                    shmkPan5.restarStock(listaShmkPan, productoShmkPan);
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
                    productoAgregado(vdsgOp1.precio)
                    vdsgOp1.restarStock(listaVdsgOP, productoVdsgOp);
                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;

                case "2": if (vdsgOp2.stock > 0) {
                    productoAgregado(vdsgOp2.precio)
                    vdsgOp2.restarStock(listaVdsgOP, productoVdsgOp);
                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;

                case "3": if (vdsgOp3.stock > 0) {
                    productoAgregado(vdsgOp3.precio)
                    vdsgOp3.restarStock(listaVdsgOP, productoVdsgOp);
                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;

                case "4": if (vdsgOp4.stock > 0) {
                    productoAgregado(vdsgOp4.precio)
                    vdsgOp4.restarStock(listaVdsgOP, productoVdsgOp);
                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;

                case "5": if (vdsgOp5.stock > 0) {
                    productoAgregado(vdsgOp5.precio)
                    vdsgOp5.restarStock(listaVdsgOP, productoVdsgOp);
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
            tomo = prompt("Ingrese el n° del tomo que desea agregar:\nTomo / Stock / Precio" + listaTkrvIvr.join(" "));
            switch (tomo) {
                case "1": if (tkrvIvr1.stock > 0) {
                    productoAgregado(tkrvIvr1.precio)
                    tkrvIvr1.restarStock(listaTkrvIvr, productoTkrvIvr);
                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;

                case "2": if (tkrvIvr2.stock > 0) {
                    productoAgregado(tkrvIvr2.precio)
                    tkrvIvr2.restarStock(listaTkrvIvr, productoTkrvIvr);
                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;

                case "3": if (tkrvIvr3.stock > 0) {
                    productoAgregado(tkrvIvr3.precio)
                    tkrvIvr3.restarStock(listaTkrvIvr, productoTkrvIvr);
                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;

                case "4": if (tkrvIvr4.stock > 0) {
                    productoAgregado(tkrvIvr4.precio)
                    tkrvIvr4.restarStock(listaTkrvIvr, productoTkrvIvr);
                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;

                case "5": if (tkrvIvr5.stock > 0) {
                    productoAgregado(tkrvIvr5.precio)
                    tkrvIvr5.restarStock(listaTkrvIvr, productoTkrvIvr);
                }
                else {
                    alert("No tenemos este producto actualmente en stock");
                } break;

                default:
                    alert("No tenemos ese tomo aun en stock!")
            }  break;
        }

        case "confirmar": {
            CompraTotal()
            alert("Sus productos seleccionados son los siguientes:" + listadoCompra.join(" ") +"\n\n\nEl total de su compra es: $" + precioTotal + "\nEl IVA de su compra es: $" + (precioTotal * 0.19));
            break;
        }

        case "0":
            alert("Compra Cancelada!"); break sistemaCompra;


        default:
            alert("Opcion invalida"); break;

    }
} while (opcion != "confirmar") {
    alert("Muchas gracias por visitarnos!")
    i = 1;
    carroCompra.length = 0;
    listadoCompra.length = 0;
    precioTotal = 0;
}

