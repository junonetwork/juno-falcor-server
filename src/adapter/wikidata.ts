import { GraphAdapterQueryHandlers, Search, AdapterSearchResponse, AdapterSearchCountResponse, AdapterTripleCountResponse, AdapterTripleResponse, AdapterTypeListResponse, AdapterPredicateListResponse } from "juno-falcor-router";
import { of } from "rxjs";
// import { ajax } from 'rxjs/ajax';
// import { mergeMap } from 'rxjs/operators';
import { StandardRange } from "falcor-router";


// const BASE_URL = 'https://query.wikidata.org/sparql?format=json&query=';
// const makeUrl = (query: string) => BASE_URL + encodeURIComponent(query);


export class WikidataAdapter implements GraphAdapterQueryHandlers {
  public search(key: string, { type }: Search, ranges: StandardRange[], count: boolean) {
    // return ajax.getJSON(makeUrl('')).pipe(
    //   mergeMap((response) => {
    //     return of<AdapterSearchResponse | AdapterSearchCountResponse>();
    //   })
    // );
    return of<AdapterSearchResponse | AdapterSearchCountResponse>();
  }

  public triples(subjects: string[], predicates: string[], ranges: StandardRange[], count: boolean) {
    return of<AdapterTripleResponse | AdapterTripleCountResponse>();
  }

  public getTypes() {
    return of<AdapterTypeListResponse>();
  }

  public getPredicates(types: string[]) {
    return of<AdapterPredicateListResponse>();
  }
}