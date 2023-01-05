export class Ball {
  color: string = "red";
  circumference: number = 20;
  material: string = "tissue";

  toChangeColor(newColor: string) {
    this.color = newColor;
  }

  toShowColor() {
    console.log(this.color);
  }
}
