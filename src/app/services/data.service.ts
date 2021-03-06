import { Injectable } from "@angular/core";
import { of } from "rxjs/internal/observable/of";
import { tap } from "rxjs/operators";
@Injectable()
export class DataService {
  constructor() {}

  someApiCall() {
    return of([]).pipe(tap(() => console.log("log from service")));
  }
}
