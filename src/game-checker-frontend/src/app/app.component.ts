import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GameChecker';
  pageLinks = [
    { description: 'My Games', link: '/list-games' },
    { description: 'Create Game', link: '/create-game' },
  ];
}
