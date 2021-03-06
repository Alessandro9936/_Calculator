class Calculator {
  constructor() {
    this.firstNumber;
    this.secondNumber;
    this.calc;
    this.result;
  }

  setFirstNumber(num) {
    this.firstNumber = +num;
  }

  setSecondNumber(num) {
    this.secondNumber = +num;
  }

  setOperation(operation) {
    this.calc = operation;
  }

  checkOperation() {
    const operators = {
      "+": () => this.add(),
      "-": () => this.sub(),
      "*": () => this.mol(),
      "/": () => this.div(),
    };
    return operators[this.calc]();
  }

  add() {
    return !this.result
      ? (this.result = this.firstNumber + this.secondNumber)
      : (this.result += this.secondNumber);
  }

  sub() {
    return !this.result
      ? (this.result = this.firstNumber - this.secondNumber)
      : (this.result -= this.secondNumber);
  }

  mol() {
    return !this.result
      ? (this.result = this.firstNumber * this.secondNumber)
      : (this.result *= this.secondNumber);
  }

  div() {
    return !this.result
      ? (this.result = this.firstNumber / this.secondNumber)
      : (this.result /= this.secondNumber);
  }
}

export default Calculator;
