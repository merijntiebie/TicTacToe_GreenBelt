import { Player } from "../../src/players";
import { Board } from "../../src/board";
import { Game } from "../../src/game";

describe("When a new game is created", () => {
  it("it should initialize players and board correctly", () => {
    const playerX = new Player("X");
    const playerO = new Player("O");
    const game = new Game();
    const boardState = game.getBoardState();


    expect(game.playerX).toEqual(playerX);
    expect(game.playerO).toEqual(playerO);
    expect(game.currentPlayer).toEqual(playerX);
    expect(boardState).toEqual([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });
});
