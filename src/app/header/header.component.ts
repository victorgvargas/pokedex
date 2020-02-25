import { Component, OnInit } from '@angular/core';
import { PassDataService } from '../pass-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private passData : PassDataService) { }

  ngOnInit() {
  }

  onPassData(data : string){
    this.passData.dataPassed.next(data);
  }

}
