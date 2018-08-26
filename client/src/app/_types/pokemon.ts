export class Pokemon {
  id: string;
  name: {
    en: string;
    jp: string;
    ch: string;
  };
  description: string;
  stats: {
    HP: number;
    ATK: number;
    DEF: number;
    SATK: number;
    SDEF: number;
    SPD: number;
  };
  type: number[];
  images: {
    large: string;
    thumbnail: string;
    sprite: string;
  };
}
