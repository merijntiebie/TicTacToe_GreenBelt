import { Game } from "../../src/game";
import {
  boardStateWithVerticalWinForX,
  boardStateWithAlmostVerticalWinForX,
} from "../doubles/board.state";

describe("After a player has placed its symbol, the turn goes to the other player ", () => {
  it("Current player is X, next player is O", () => {
    const game = new Game();
    game.currentPlayer.symbol = "X";
    game.switchTurns();
    expect(game.currentPlayer.symbol).toEqual("O");
  });
  it("Current player is O, next player is X", () => {
    const game = new Game();
    game.setCurrentPlayer(game.playerO);
    game.switchTurns();
    expect(game.currentPlayer.symbol).toEqual("X");
  });
});

describe("After a player places its symbol, we check if the player has won", () => {
  describe("A player can win with a vertical win", () => {
    it(`
          X| |  
          -+-+- 
          X|O|X   -> is not a win for x
          -+-+- 
           | |O `, () => {
      const game = new Game();
      game.board.setBoardState(boardStateWithAlmostVerticalWinForX);
      game.lastMove = [1, 2];
      game.setCurrentPlayer(game.playerX);
      expect(game.checkIfCurrentPlayerHasAVerticalWin()).toEqual(false);
    });
    it(`
          X| |  
          -+-+- 
          X|O|X   -> is a win for x
          -+-+- 
          X| |O `, () => {
      const game = new Game();
      game.board.setBoardState(boardStateWithVerticalWinForX);
      game.lastMove = [2, 0];
      game.setCurrentPlayer(game.playerX);
      expect(game.checkIfCurrentPlayerHasAVerticalWin()).toEqual(true);
    });
  });
});
