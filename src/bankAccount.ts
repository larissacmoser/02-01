export class BankAccount {
  accountNumber: number;
  accountOwner: string;
  balance: number;

  constructor(
    accountNumber: number,
    accountOwner: string,
    balance: number = 0
  ) {
    this.accountNumber = accountNumber;
    this.accountOwner = accountOwner;

    this.balance = balance;
  }
  toChangeOwner(newOwner: string) {
    this.accountOwner = newOwner;
    console.log(this);
  }
  toAddMoney(income: number) {
    this.balance += income;
    console.log(this);
  }
  toTakeMoney(outcome: number) {
    if (outcome > this.balance) {
      console.log("Operação não permitida.");
    } else {
      this.balance -= outcome;
      console.log(this);
    }
  }
}
