import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import { ActivatedRoute } from '@angular/router';
import {ComponentCanDeactivate} from '../../guards/exit-hello.guard';

@Component({
  selector: 'app-guards',
  templateUrl: './guards.component.html',
})

export class GuardsComponent implements OnInit {
  saved = false;
  resolveData: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.resolveData = this.route.snapshot.data.caunter[0].name;
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (!this.saved) {
      return confirm('Вы хотите покинуть страницу?');
    } else {
      return true;
    }
  }
}
