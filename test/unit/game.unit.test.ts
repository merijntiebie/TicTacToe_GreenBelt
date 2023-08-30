import { Game } from "../../src/game";

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
