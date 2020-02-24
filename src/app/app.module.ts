import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HeaderComponent } from './header/header.component';
import { SinglePokemonComponent } from './pokemon-list/single-pokemon/single-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    HeaderComponent,
    SinglePokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
