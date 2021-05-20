import { Nota } from "./Nota";

export class LibretaDeNotas {
  private notas: Nota[] = [];

  constructor(notas: Nota[]) {
    this.notas = notas;
  }

  filtrarTematica(tematica: string): Nota[] {
    return this.notas.filter((nota) => nota.consultarTematica == tematica);
  }
}
