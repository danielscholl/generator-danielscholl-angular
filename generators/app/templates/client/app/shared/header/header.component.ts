import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-header', // <ui-header></ui-header>
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss', './responsive.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

}
