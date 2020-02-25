import { Component, OnInit } from '@angular/core';
import { FetchingService } from '../fetching.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  count : number = 0;
  results = [];

  constructor(private getData : FetchingService) { }

  ngOnInit() {
    this.getData.getPokemons(this.count).subscribe(res => {
      this.results = res.results;
      console.log(this.results);
    })
  }

  addResults(){
    this.count += 20;
    this.getData.getPokemons(this.count).subscribe (res => {
      console.log(res);
      res.results.forEach(element => {
        this.results.push(element);
      });
    })
  }

  onFilter(type : number){
    if (type === 1) {
      
    }
  }
}
