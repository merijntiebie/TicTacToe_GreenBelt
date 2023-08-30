import { Player } from "./players";
import { Board } from "./board";

export class Game {
  playerX: Player;

  playerO: Player;

  currentPlayer: Player;

  board: Board;

  constructor() {
    this.playerX = new Player("X");
    this.playerO = new Player("O");
    this.board = new Board();
    this.currentPlayer = this.playerX;
  }

  getBoardState(): string[][] {
    return this.board.getBoardState();
  }
}
