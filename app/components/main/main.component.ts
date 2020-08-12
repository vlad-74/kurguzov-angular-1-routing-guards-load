import { Component, VERSION, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  constructor(private router: Router) {  }

  ngOnInit() {}

  onClick() { this.router.navigate(['/preload']); }
  onClickParams() { this.router.navigate(['/children', 'audio'], { queryParams: {name: 'queryParams_from_Main'}}); }
}
