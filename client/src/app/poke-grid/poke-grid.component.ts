import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../_services/api-client.service';
import { Pokemon } from '../_types/pokemon';

@Component({
  selector: 'app-poke-grid',
  templateUrl: './poke-grid.component.html',
  styleUrls: ['./poke-grid.component.css']
})
export class PokeGridComponent implements OnInit {
  pokelist: Pokemon[];

  constructor(private apiClient: ApiClientService) {}

  ngOnInit() {
    this.apiClient.getAllPokemon().subscribe(data => {
      this.pokelist = [...data];
    });
  }
}
