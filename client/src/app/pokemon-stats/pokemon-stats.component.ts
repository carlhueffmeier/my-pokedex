import { Component, Input } from '@angular/core';
import { Pokemon } from '../_types/pokemon';

@Component({
  selector: 'app-pokemon-stats',
  templateUrl: './pokemon-stats.component.html',
  styleUrls: ['./pokemon-stats.component.css']
})
export class PokemonStatsComponent {
  @Input()
  pokemon: Pokemon;
  @Input()
  primaryColorFragment: string;

  getStats() {
    return Object.entries(this.pokemon.stats);
  }

  getStyles() {
    return { color: `rgb(${this.primaryColorFragment})` };
  }
}
