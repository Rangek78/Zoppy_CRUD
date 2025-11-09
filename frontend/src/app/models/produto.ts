export class Produto {
  id?: number;
  nome: string;
  valorDeCompra: number;
  valorDeVenda: number;
  observacoes: string;

  constructor(
    nome: string,
    valorDeCompra: number,
    valorDeVenda: number,
    observacoes: string
  ) {
    this.nome = nome;
    this.valorDeCompra = valorDeCompra;
    this.valorDeVenda = valorDeVenda;
    this.observacoes = observacoes;
  }
}
