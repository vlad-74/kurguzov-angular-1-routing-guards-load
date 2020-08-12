import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class HelloResolver implements Resolve<any> {
  counter = 0
  constructor() {}
  resolve() { this.counter++; return of([{name: 'Resolver - ' + this.counter}]);}
}