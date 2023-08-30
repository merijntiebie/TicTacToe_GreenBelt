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

  switchTurns() {
    if (this.currentPlayer === this.playerX) {
      this.currentPlayer = this.playerO;
    } else {
      this.currentPlayer = this.playerX;
    }
  }

  setCurrentPlayer(player: Player) {
    this.currentPlayer = player;
  }

  takeTurn(row: number, column: number) {
    this.board.setSymbol(row, column, this.currentPlayer.symbol);
    this.switchTurns();
  }
}
