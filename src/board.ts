export class Board {
  private board: string[][];

  constructor() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  }

  getBoardState(): string[][] {
    return this.board;
  }
}
