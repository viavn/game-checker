import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateGamePageComponent } from './pages/create-game-page/create-game-page.component';
import { ListGamesPageComponent } from './pages/list-games-page/list-games-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-games', pathMatch: 'full' },
  { path: 'list-games', component: ListGamesPageComponent },
  { path: 'create-game', component: CreateGamePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
