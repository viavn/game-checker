import { Injectable } from '@angular/core';
import { GameModel } from './models/GameModel';

@Injectable({
  providedIn: 'root'
})
export class GameStoreService {

  private games: GameModel[] = [
    { number1: 1, number2: 2, number3: 3, number4: 4, number5: 5, number6: 6, number7: 7 },
  ];

  getAllGames(): Promise<GameModel[]> {
    return new Promise((resolve) => {
      resolve(this.games);
    });
  }

  createGame(game: GameModel): void {
    this.games = [...this.games, game];
  }

  gameExists(game: GameModel): boolean {
    const numberExists = [];

    this.games.forEach(existingGame => {
      if (existingGame.number1 === game.number1 &&
        existingGame.number2 === game.number2 &&
        existingGame.number3 === game.number3 &&
        existingGame.number4 === game.number4 &&
        existingGame.number5 === game.number5 &&
        existingGame.number6 === game.number6 &&
        existingGame.number7 === game.number7
      ) {
        numberExists.push(true);
      }
    });

    return numberExists.length > 0;
  }
}
