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
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { PokemonStatsComponent } from './pokemon-stats/pokemon-stats.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeferLoadDirective } from './defer-load.directive';
import { PokeListItemComponent } from './poke-list-item/poke-list-item.component';
import { InfiniteScrollDirective } from './infinite-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    PokeGridComponent,
    PokeSpriteComponent,
    PokemonOverviewComponent,
    PokeListComponent,
    PokemonDetailsComponent,
    TabsComponent,
    TabComponent,
    PokemonStatsComponent,
    SvgIconComponent,
    DeferLoadDirective,
    PokeListItemComponent,
    InfiniteScrollDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
