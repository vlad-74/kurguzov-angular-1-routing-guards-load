import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
})

export class AudioComponent implements OnInit, OnDestroy {
  qP = '';
  private readonly destroyed$ = new Subject();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
    .pipe(takeUntil(this.destroyed$))
    .subscribe(params => {
        console.log('Переданный параметр: ', params['name'], params);
        this.qP = params['name'];
      }
    )
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
