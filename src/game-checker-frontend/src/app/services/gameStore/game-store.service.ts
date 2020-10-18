import { Injectable } from '@angular/core';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { GameModel } from './models/GameModel';

@Injectable({
  providedIn: 'root'
})
export class GameStoreService {

  constructor(private localStorageService: LocalStorageService) { }

  private games: GameModel[] = [];

  getAllGames(): Promise<GameModel[]> {
    return new Promise(async resolve => {
      const games = await this.localStorageService.getItems('games');
      this.games = games;
      resolve(this.games);
    });
  }

  createGame(game: GameModel): Promise<void> {
    return new Promise(async resolve => {
      this.games = [...this.games, { ...game, id: this.games.length + 1 }];
      await this.localStorageService.save(this.games, 'games');
      resolve();
    });
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
