import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preload',
  templateUrl: './preload.component.html',
})
export class PreloadComponent implements OnInit {

  constructor(private router: Router) {  }
  ngOnInit() {}

  onClick() { this.router.navigate(['/', 'main']); }

}
