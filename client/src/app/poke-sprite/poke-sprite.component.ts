import { Component, Input } from '@angular/core';
import { Pokemon } from '../_types/pokemon';

@Component({
  selector: 'app-poke-sprite',
  templateUrl: './poke-sprite.component.html',
  styleUrls: ['./poke-sprite.component.css']
})
export class PokeSpriteComponent {
  @Input()
  pokemon: Pokemon;

  constructor() {}

  getSpriteUri(): string {
    return 'http://localhost:7777' + this.pokemon.images.sprite;
  }
}
