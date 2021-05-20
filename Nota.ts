import { Autor } from "./Autor";

export class Nota {
  private tematica: string;
  private autor: Autor;
  private paginas: number;

  constructor(tematica: string, autor: Autor, paginas: number) {
    this.tematica = tematica;
    this.autor = autor;
    this.paginas = paginas;
  }

  set modificarTematica(tematica: string) {
    this.tematica = tematica;
  }

  set modificarAutor(autor: Autor) {
    this.autor = autor;
  }

  set modificarPaginas(paginas: number) {
    this.paginas = paginas;
  }

  get consultarTematica() {
    return this.tematica;
  }

  get consultarAutor() {
    return this.autor;
  }

  get consultarPaginas() {
    return this.paginas;
  }
}
