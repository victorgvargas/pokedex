import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { SinglePokemonComponent } from './pokemon-list/single-pokemon/single-pokemon.component';


const routes: Routes = [
  {path : '', redirectTo : '/pokedex', pathMatch : 'full'},
  {path : 'pokedex', component : PokemonListComponent},
  {path : 'pokedex/:name/:id', component : SinglePokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
