export class Calculator {
  history: object[];
  output: number;

  constructor(history: object[] = []) {
    this.history = history;
    this.output = 0;
  }
  toSum(value: number) {
    let input = {
      value,
      operation: "Sum",
      output: this.output + value,
    };
    this.history.push(input);
    this.output = input.output;
    console.log(`O resultado é ${input.output}`);
    console.log(this.history);
  }
  toSubtract(value: number) {
    let input = {
      value,
      operation: "Subtract",
      output: this.output - value,
    };
    this.history.push(input);
    this.output = input.output;
    console.log(`O resultado é ${input.output}`);
    console.log(this.history);
  }
  toMultiply(value: number) {
    let input = {
      value,
      operation: "Multiplication",
      output: this.output * value,
    };
    this.history.push(input);
    this.output = input.output;
    console.log(`O resultado é ${input.output}`);
    console.log(this.history);
  }
  toDivide(value: number) {
    let input = {
      value,
      operation: "Divide",
      output: Number((this.output / value).toFixed(2)),
    };
    this.history.push(input);
    this.output = input.output;
    console.log(`O resultado é ${input.output}`);
    console.log(this.history);
  }
}
