export class Type {
  id: string;
  en: string;
  jp: string;
  ch: string;
}

export class TypeMap {
  [key: string]: Type;
}
