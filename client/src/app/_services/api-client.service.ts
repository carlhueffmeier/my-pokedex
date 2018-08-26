import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../_types/pokemon';
import { Type } from '../_types/pokeType';
import config from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  private baseUrl: string = config.API;

  constructor(private http: HttpClient) {}

  getAllPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.baseUrl + '/pokemon');
  }

  getPokemonById(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.baseUrl + `/pokemon/${id}`);
  }

  getTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(this.baseUrl + `/types`);
  }
}
