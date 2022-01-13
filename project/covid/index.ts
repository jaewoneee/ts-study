// 타입 정의를 모아둔 파일
export interface Country {
  Country: string;
  CountryCode: string;
  Date: string;
  ID: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Premium: any;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}
interface Global {
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}
export interface CovidSummaryResponse {
  Countries: Country[];
  Date: string;
  Global: Global;
  ID: string;
  Message: string;
}

export interface CountryInfo {
  Cases: number;
  City: string;
  CityCode: string;
  Country: string;
  CountryCode: string;
  Date: string;
  Lat: string;
  Lon: string;
  Province: string;
  Status: string;
}

// type으로 한 번 더 넣어준 이유 :
//인터페이스로는 배열 타입을 정의할 수 없어서
export type CountrySummaryResponse = CountryInfo[];
