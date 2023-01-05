export class Carro {
  consumo: number;
  qtdTanque: number;

  constructor(consumo: number) {
    this.consumo = consumo;
    this.qtdTanque = 0;
  }

  andar(km: number) {
    if (this.qtdTanque) {
      let qtdLitrosTanque = this.qtdTanque - this.consumo / km;
      console.log(
        `Você andou ${km} km e possui ainda ${qtdLitrosTanque} L no seu tanque.`
      );
    } else {
      console.log("Você não possui combustível suficiente");
    }
  }

  obterGasolina() {
    console.log(this.qtdTanque);
  }

  abastecerGasolina(litrosGas: number) {
    this.qtdTanque += litrosGas;
  }
}
