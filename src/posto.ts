export class BombaCombustivel {
  tipoCombustivel!: "comum" | "aditivado";
  valorLitro: number = 5;
  quantidadeCombustivel: number = 120;

  abastecerPorValor(valor: number) {
    if (valor > this.quantidadeCombustivel) {
      console.log("Quantidade indisponível");
    } else {
      let qtdLitros = valor / this.valorLitro;
      console.log(qtdLitros);
      this.quantidadeCombustivel -= qtdLitros;
    }
  }

  abastecerPorLitro(litros: number) {
    this.quantidadeCombustivel -= litros;
    let valorPago = litros * this.valorLitro;
    console.log(valorPago);
  }

  alterarValor(novoValor: number) {
    this.valorLitro = novoValor;
  }

  alterarCombustivel(novoTipo: "aditivado") {
    this.tipoCombustivel = novoTipo;
  }

  alterarQuantidadeCombustivel(novaQtd: number) {
    this.quantidadeCombustivel = novaQtd;
  }
}
