import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../_services/api-client.service';
import { Pokemon } from '../_types/pokemon';
import { TypeMap } from '../_types/pokeType';

@Component({
  selector: 'app-pokemon-overview',
  templateUrl: './pokemon-overview.component.html',
  styleUrls: ['./pokemon-overview.component.css']
})
export class PokemonOverviewComponent implements OnInit {
  pokelist: Pokemon[];
  types: TypeMap;

  constructor(private apiClient: ApiClientService) {}

  ngOnInit() {
    this.apiClient.getTypes().subscribe(data => {
      this.types = data.reduce(
        (target, type) => ({
          ...target,
          [type.id]: type
        }),
        {}
      );
    });
    this.apiClient.getAllPokemon().subscribe(data => {
      this.pokelist = [...data];
    });
  }
}
