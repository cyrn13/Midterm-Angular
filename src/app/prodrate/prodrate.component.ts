import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prodrate',
  templateUrl: './prodrate.component.html',
  styleUrls: ['./prodrate.component.css']
})
export class ProdrateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentRate = 0;
}
