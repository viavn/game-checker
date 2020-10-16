import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateGamePageComponent } from './pages/create-game-page/create-game-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'create-game', pathMatch: 'full' },
  { path: 'create-game', component: CreateGamePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
