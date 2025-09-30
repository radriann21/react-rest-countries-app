export interface CountryInterface {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key:string]: {
        official:string;
        common:string;
      }
    }
  }
  capital: string[],
  region: string;
  population: number;
  flags: {
    png: string;
    svg: string;
    alt: string;
  }
}