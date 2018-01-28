import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catelist',
  templateUrl: './catelist.component.html',
  styles: []
})
export class CatelistComponent implements OnInit {

  constructor() { }
  page: number;
  ngOnInit() {
    this.page = 1;
  }

}
