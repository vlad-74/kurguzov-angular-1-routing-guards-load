import {Component, OnInit, OnDestroy} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-comp',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  current = '';
  private readonly destroyed$ = new Subject();

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
    .pipe(takeUntil(this.destroyed$))
      .subscribe(event => {
        if ( event instanceof NavigationEnd ) {
          this.current = event.url;
          console.log('event', event);
        }
      });
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

