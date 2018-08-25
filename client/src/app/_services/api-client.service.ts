import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../_types/pokemon';
import config from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  private baseUrl: string = config.API;

  constructor(private http: HttpClient) {
    console.log(this.baseUrl);
  }

  getAllPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.baseUrl + '/pokemon');
  }

  getPokemonById(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.baseUrl + `/pokemon/${id}`);
  }
}
