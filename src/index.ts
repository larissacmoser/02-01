import { Counter } from "./counter";
import { Ball } from "./ball";
import { BankAccount } from "./bankAccount";
import { Calculator } from "./calculator";
import { BombaCombustivel } from "./posto";
import { Carro } from "./carro";

// let counter1 = new Counter();

// counter1.toAdd();
// counter1.toReturnValue();
// counter1.toReset();
// counter1.toReturnValue();

// let ball1 = new Ball();

// ball1.toShowColor();
// ball1.toChangeColor("blue");
// ball1.toShowColor();

// let account1 = new BankAccount(22050, "Larissa Moser", 1200000);
// account1.toAddMoney(100000);
// account1.toChangeOwner("Loiva Hahn");
// account1.toTakeMoney(10000);
// let calculate1 = new Calculator();
// calculate1.toSum(2);
// calculate1.toSum(2);
// calculate1.toDivide(4);
// calculate1.toMultiply(3);

// let posto1 = new BombaCombustivel();
// posto1.abastecerPorLitro(4);
// posto1.abastecerPorValor(20);

let carro1 = new Carro(5);
carro1.andar(2);
carro1.obterGasolina();
carro1.abastecerGasolina(100);
carro1.obterGasolina();
carro1.andar(2);
