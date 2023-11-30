import {
  LineaTicket,
  ResultadoLineaTicket,
  TipoIva,
  ResultadoTotalTicket,
  TotalPorTipoIva,
  TicketFinal,
} from "./modelo";

export const generarTicket = (lineas: LineaTicket[]) => {
  const ticket: ResultadoLineaTicket[] = [];
  const desgloseIva: TotalPorTipoIva[] = [];
  const ticketFinal: TicketFinal[] = [];
  let totalSinIva = 0;
  let totalConIva = 0;

  lineas.forEach((linea) => {
    const { producto, cantidad } = linea;
    let precioSinIva = producto.precio;
    let tipoIva = producto.tipoIva;
    let precioConIva = calcularPrecioConIva(tipoIva, precioSinIva);

    const totalPrecioSinIva = precioSinIva * cantidad;
    const totalPrecioConIva = precioConIva * cantidad;

    totalSinIva += totalPrecioSinIva;
    totalConIva += totalPrecioConIva;

    ticket.push({
      nombre: producto.nombre,
      cantidad,
      precionSinIva: precioSinIva,
      tipoIva,
      precioConIva,
    });

    // Actualizar desglose de IVA
    const tipoIvaExistente = desgloseIva.find((p) => p.tipoIva === tipoIva);

    if (tipoIvaExistente) {
      tipoIvaExistente.cuantia += totalPrecioConIva - totalPrecioSinIva;
    } else {
      desgloseIva.push({
        tipoIva,
        cuantia: totalPrecioConIva - totalPrecioSinIva,
      });
    }
  });

  ticketFinal.push({
    lineas: ticket,
    total: generarResultadoTotalDelTicket(totalSinIva, totalConIva),
    desgloseIva: desgloseIva,
  });

  return ticketFinal;
};

const generarResultadoTotalDelTicket = (num1: number, num2: number) => {
  const resultadoTotalTicket: ResultadoTotalTicket = {
    totalSinIva: Number(num1.toFixed(2)),
    totalConIva: Number(num2.toFixed(2)),
    totalIva: Number((num2 - num1).toFixed(2)),
  };

  return resultadoTotalTicket;
};

const calcularPrecioConIva = (tipoIva: TipoIva, precio: number): number => {
  let precioConIva: number = 0;

  switch (tipoIva) {
    case "general":
      precioConIva = precio * 1.21;
      break;
    case "reducido":
      precioConIva = precio * 1.1;
      break;
    case "superreducidoA":
      precioConIva = precio * 1.05;
      break;
    case "superreducidoB":
      precioConIva = precio * 1.04;
      break;
    case "superreducidoC":
      precioConIva = precio;
      break;
    case "sinIva":
      precioConIva = precio;
      break;
    default:
      precioConIva = 0;
      break;
  }
  return Number(precioConIva.toFixed(2));
};
