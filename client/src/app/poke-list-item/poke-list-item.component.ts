import { Component, Input } from '@angular/core';
import { PokemonWithType } from '../_types/pokemon';

@Component({
  selector: 'app-poke-list-item',
  templateUrl: './poke-list-item.component.html',
  styleUrls: ['./poke-list-item.component.css']
})
export class PokeListItemComponent {
  private deferred = true;
  @Input()
  pokemon: PokemonWithType;

  getTypeSpecificClass(type) {
    if (type && type.en) {
      return 'poke-list__type--' + type.en.toLowerCase();
    }
  }
}
