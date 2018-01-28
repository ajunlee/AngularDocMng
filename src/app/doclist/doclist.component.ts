import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doclist',
  templateUrl: './doclist.component.html',
  styles: []
})
export class DoclistComponent implements OnInit {

  constructor() { }
  page: number;
  ngOnInit() {
    this.page = 1;
  }

}
