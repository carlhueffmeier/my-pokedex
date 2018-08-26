import { Component, Input } from '@angular/core';
import { getImageUri } from '../_helper/utils';
import { Pokemon } from '../_types/pokemon';
import { TypeMap } from '../_types/pokeType';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent {
  @Input()
  pokelist: Pokemon[];
  @Input()
  types: TypeMap;

  constructor() {}

  getSpriteUri(pokemon: Pokemon): string {
    return getImageUri(pokemon.images.sprite);
  }

  getType(typeId: string) {
    return this.types[typeId];
  }

  getTypeSpecificClass(typeId) {
    const type = this.getType(typeId);
    if (type && type.en) {
      return 'poke-list__type--' + type.en.toLowerCase();
    }
  }
}
