import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages-list',
  templateUrl: './languages-list.component.html',
  styleUrls: ['./languages-list.component.css']
})
export class LanguagesListComponent implements OnInit {

  status = 0;
  clickEvent(value) {
      this.status = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
