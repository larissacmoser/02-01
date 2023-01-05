export class Counter {
  value: number = 20;

  toReset() {
    this.value = 0;
  }

  toAdd() {
    this.value++;
  }

  toReturnValue() {
    console.log(this.value);
  }
}
