import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../_types/pokemon';

@Component({
  selector: 'app-poke-grid',
  templateUrl: './poke-grid.component.html',
  styleUrls: ['./poke-grid.component.css']
})
export class PokeGridComponent implements OnInit {
  @Input()
  pokelist: Pokemon[];

  constructor() {}

  ngOnInit() {}
}
