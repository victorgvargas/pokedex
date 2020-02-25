import { Component, OnInit, DoCheck } from '@angular/core';
import { FetchingService } from '../fetching.service';
import { PassDataService } from '../pass-data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit,DoCheck {
  count : number = 0; //Incremented to load more results
  verifyingCount : number = 0; //Used for verifying if results was already cloned
  results; // Main results array
  clonedResults = [];  //Using for saving results array values
  type : string; //Receive type from header
  orderType : string = 'Number'; //Store current type

  constructor(private getData : FetchingService,
              private passData : PassDataService) { }

  ngOnInit() {
    // Get data from service
    this.getData.getPokemons(this.count).subscribe(res => {
      this.results = res.results;
      console.log(this.results);
    });

    // Data passed from header & filtered
    this.passData.dataPassed.subscribe( didActivate => {
      this.onFilter(didActivate);
      this.type = didActivate;
    });
  }

  ngDoCheck() {
    // Clone clonedResults if wasn't cloned before
    if (this.results && this.verifyingCount === 0) {
      this.clonedResults = this.results;
      this.clonedResults.forEach(element => {
        console.log(element.name);
      })
      this.verifyingCount++;
    }
  }

  addResults(){
    //Load more results to the page
    this.count += 20;
    this.getData.getPokemons(this.count).subscribe (res => {
      console.log(res);
      res.results.forEach(element => {
        this.results.push(element);
      });
    })
    this.onFilter(this.orderType);
  }

  onFilter(type : string){
    // Order results alphabetically
    if (type === 'Alphabetical') {
      function compare(a,b) {
        const pokeA = a.name.toUpperCase();
        const pokeB = b.name.toUpperCase();
      
        let comparison = 0;
        if (pokeA > pokeB) {
          comparison = 1;
        } else if (pokeA < pokeB) {
          comparison = -1;
        }
        return comparison;
      }
      this.results.sort(compare);
      this.orderType = 'Alphabetical';
    }

    //Order results by pokedex number
    if (type === 'Number') {
      this.results = this.clonedResults;
      this.orderType = 'Number';
    }
  }
}
