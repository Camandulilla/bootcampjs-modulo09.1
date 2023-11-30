import { listaProductos } from "./modelo";
import { generarTicket } from "./funciones";

/*
En este laboratorio vamos a hacer un programa que nos calcule el precio de un ticket de compra.
Cada producto tendrá un nombre, un precio y un tipo de IVA.
*/

// Ejemplo de uso
const ticketGenerado = generarTicket(listaProductos);
console.log(ticketGenerado);
