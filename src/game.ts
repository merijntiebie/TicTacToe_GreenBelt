import { Player } from "./players";
import { Board } from "./board";

export class Game {
  playerX: Player;

  playerO: Player;

  currentPlayer: Player;

  board: Board;

  lastMove: number[];

  constructor() {
    this.playerX = new Player("X");
    this.playerO = new Player("O");
    this.board = new Board();
    this.currentPlayer = this.playerX;
    this.lastMove = [-1, -1];
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

  setLastMove(row: number, column: number) {
    this.lastMove = [row, column];
  }

  takeTurn(row: number, column: number) {
    this.board.setSymbol(row, column, this.currentPlayer.symbol);
    this.switchTurns();
    this.lastMove = [row, column];
  }

  checkIfCurrentPlayerHasAVerticalWin() {
    const columnOfLastMove = this.lastMove[1];
    const symbolOfLastMove = this.currentPlayer.symbol;

    let verticalWin = true;
    for (let row = 0; row < 3; row += 1) {
      if (this.board.state[row][columnOfLastMove] !== symbolOfLastMove) {
        verticalWin = false;
      }
    }
    return verticalWin;
  }
}
