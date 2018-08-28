import { Component, Input } from '@angular/core';
import { getImageUri } from '../_helper/utils';
import { Pokemon, PokemonWithType } from '../_types/pokemon';
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
  private maxVisibleIndex: number = 50;

  constructor() {}

  populatePokemonForView(pokemon: Pokemon): PokemonWithType {
    return {
      id: pokemon.id,
      name: pokemon.name,
      description: pokemon.description,
      stats: pokemon.stats,
      type: pokemon.type.map(id => this.types[id]),
      imageSrc: <any>Object.entries(pokemon.images).reduce(
        (imageUris, [key, path]) => ({
          ...imageUris,
          [key]: getImageUri(path)
        }),
        {}
      )
    };
  }

  extentList() {
    this.maxVisibleIndex = Math.min(
      this.pokelist.length,
      this.maxVisibleIndex + 50
    );
  }
}
