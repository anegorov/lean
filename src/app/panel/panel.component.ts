import { Component, OnInit, Input } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @Input() title: string;

  a1:string = "123";

  constructor( private httpService: HttpService) { }

  ngOnInit() {
  }

  start(){
    this.httpService.getData('BTCUSDT')
    .toPromise()
    .then(response => {
      console.log(response);
    })
  }

}
