import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  value;
  constructor(
    public _homeService: HomeService
  ) { }

  ngOnInit() {
  }

  getUsageData(){
    this._homeService.callGetService('https://www.googleapis.com/drive/v3/about?fields=storageQuota').subscribe(res => {
      console.log(res.json())
      this.value = JSON.stringify(res.json());
    })
  }

}
