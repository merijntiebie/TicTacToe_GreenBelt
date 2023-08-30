export class Board {
  state: string[][];

  constructor() {
    this.state = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  }

  setSymbol(row: number, column: number, symbol: string) {
    this.state[row][column] = symbol;
  }
}
