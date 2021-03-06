import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { CreateGamePageComponent } from './pages/create-game-page/create-game-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListGamesPageComponent } from './pages/list-games-page/list-games-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateGamePageComponent,
    ListGamesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
