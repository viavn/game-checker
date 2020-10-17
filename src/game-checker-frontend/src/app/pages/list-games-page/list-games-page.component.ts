import { Component, OnInit } from '@angular/core';
import { GameStoreService } from 'src/app/services/gameStore/game-store.service';

@Component({
  selector: 'app-list-games-page',
  templateUrl: './list-games-page.component.html',
  styleUrls: ['./list-games-page.component.scss']
})
export class ListGamesPageComponent implements OnInit {
  games: any[];
  displayedColumns: string[] = ['id', 'game'];

  constructor(private gameStoreSevice: GameStoreService) { }

  ngOnInit(): void {
    this.gameStoreSevice.getAllGames().then(games => {
      this.games = games.map(game => ({
        id: game.id,
        game: `${game.number1}-${game.number2}-${game.number3}-${game.number4}-${game.number5}-${game.number6}-${game.number7}`
      }));
    });
  }
}
