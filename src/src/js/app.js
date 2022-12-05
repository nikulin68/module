import Game, {
    GameSavingData,
    readGameSaving as loadGame,
    writeGameSaving as saveGame,
  } from "./modules/game";
  
  console.log("app worked");
  
  const game = new Game();
  game.start();