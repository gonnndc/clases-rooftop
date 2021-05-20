import { Autor } from "./Autor";
import { LibretaDeNotas } from "./Libreta-de-notas";
import { Nota } from "./Nota";

function main() {
  const autorNotaUno = new Autor("Ruben Gomez", 54, "Periodista");
  const notaUno = new Nota("Politica", autorNotaUno, 5);

  const autorNotaDos = new Autor("Raul Gonzalez", 40, "Cocinero");
  const notaDos = new Nota("Cocina", autorNotaDos, 10);

  const autorNotaTres = new Autor("Laura Lopez", 42, "Deportista");
  const notaTres = new Nota("Deportes", autorNotaTres, 12);

  const autorNotaCuatro = new Autor(
    "Camila Fernandez",
    29,
    "Ingeniera Quimica"
  );
  const notaCuatro = new Nota("Ciencia", autorNotaCuatro, 20);

  const autorNotaCinco = new Autor("Mirta Funes", 45, "Periodista");
  const notaCinco = new Nota("Politica", autorNotaCinco, 7);

  const notas = [notaUno, notaDos, notaTres, notaCuatro, notaCinco];

  const libretaNotas = new LibretaDeNotas(notas);
  const resultado = libretaNotas.filtrarTematica("Politica");

  console.log(resultado);
}

main();
