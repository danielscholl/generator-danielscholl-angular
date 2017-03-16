import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'ui-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name: string;
  message: string;

  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    this._homeService.getData().subscribe(
      data => {
        console.log(data);
        this.name = data.name;
        this.message = data.message;
      },
      err => console.log(err)
    );
  }

}
