import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../_services/api-client.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Pokemon } from '../_types/pokemon';
import { TypeMap } from '../_types/pokeType';
import { getImageUri } from '../_helper/utils';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: Pokemon;
  types: TypeMap;

  constructor(
    private apiClient: ApiClientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('id')),
        switchMap(id => this.apiClient.getPokemonById(id))
      )
      .subscribe(data => {
        this.pokemon = { ...data };
      });
    this.apiClient.getTypes().subscribe(data => {
      this.types = data.reduce(
        (target, type) => ({
          ...target,
          [type.id]: type
        }),
        {}
      );
    });
  }

  getImageUri(): string {
    return getImageUri(this.pokemon.images.large);
  }

  getBackgroundGradient() {
    const gradients = this.pokemon.type.map((typeId, i) => {
      const typeStr = this.getType(typeId).en.toLowerCase();
      const opacity = 1 / this.pokemon.type.length;
      const angle = 100 + i * 200;
      const primaryColor = `rgba(var(--color-poketype-${typeStr}--primary), 1)`;
      const secondaryColor = `rgba(255, 255, 255, ${opacity})`;
      return `linear-gradient(${angle}deg, ${primaryColor}, ${secondaryColor})`;
    });
    console.log(gradients);
    return gradients.join(', ');
  }

  getType(typeId: number) {
    return this.types[typeId];
  }

  getTypeBoxStyle(typeId: number) {
    const typeStr = this.getType(typeId).en.toLowerCase();
    return {
      background: `rgb(var(--color-poketype-${typeStr}--primary))`,
      'box-shadow': `1px 1px 10px 1px rgba(var(--color-poketype-${typeStr}--primary), 0.34)`
    };
  }
}
