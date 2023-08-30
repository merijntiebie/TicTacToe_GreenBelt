import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./cucumber/features/tictactoe.feature");

defineFeature(feature, (test) => {
  test("Player X wins with a vertical win", ({ given, and, when, then }) => {
    given("a game of TicTacToe", () => {});

    and("player X and player O compete for the win", () => {});

    and(/^player X has placed its mark at (\d+),(\d+)$/, (row, column) => {});

    and(/^player O has placed its mark at (\d+),(\d+)$/, (row, column) => {});

    and(/^player X has placed its mark at (\d+),(\d+)$/, (row, column) => {});

    and(/^player O has placed its mark at (\d+),(\d+)$/, (row, column) => {});

    when(/^player X places its mark at (\d+),(\d+)$/, (row, column) => {});

    then("player X wins", () => {});
    expect(true).toBe(false);
  });
});
