import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Game Checker';
  pageLinks = [
    { description: 'Meus jogos', link: '/list-games' },
    { description: 'Criar Jogo', link: '/create-game' },
  ];
}
