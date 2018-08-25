import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeSpriteComponent } from './poke-sprite.component';

describe('PokeSpriteComponent', () => {
  let component: PokeSpriteComponent;
  let fixture: ComponentFixture<PokeSpriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeSpriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeSpriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
