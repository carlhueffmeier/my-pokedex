import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokeGridComponent } from './poke-grid/poke-grid.component';
import { PokeSpriteComponent } from './poke-sprite/poke-sprite.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { PokemonOverviewComponent } from './pokemon-overview/pokemon-overview.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [AppComponent, PokeGridComponent, PokeSpriteComponent, PokemonOverviewComponent, PokeListComponent, PokemonDetailsComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
