import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonOverviewComponent } from './pokemon-overview/pokemon-overview.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

const routes: Routes = [
  {
    path: 'pokemon/:id',
    component: PokemonDetailsComponent,
    data: { page: 'details' }
  },
  { path: '', component: PokemonOverviewComponent, data: { page: 'overview' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
