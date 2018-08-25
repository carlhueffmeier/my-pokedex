export class Pokemon {
  id: string;
  name: {
    en: string;
    jp: string;
    ch: string;
  };
  stats: {
    Attack: number;
    Defense: number;
    HP: number;
    'Sp.Atk': number;
    'Sp.Def': number;
    Speed: number;
  };
  type: number[];
  images: {
    large: string;
    thumbnail: string;
    sprite: string;
  };
}
