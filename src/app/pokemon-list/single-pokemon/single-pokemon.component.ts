import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchingService } from 'src/app/fetching.service';

@Component({
  selector: 'app-single-pokemon',
  templateUrl: './single-pokemon.component.html',
  styleUrls: ['./single-pokemon.component.css']
})
export class SinglePokemonComponent implements OnInit {
  pokemon : {id : number, name : string};
  response;

  constructor(private route : ActivatedRoute,
              private getData : FetchingService) { }

  ngOnInit() {
    this.pokemon = {
      id : this.route.snapshot.params['id'],
      name : this.route.snapshot.params['name']
    }
    this.getData.getSinglePokemon(this.pokemon.name).subscribe(res => {
      this.response = res;
      console.log(this.response);
    })
  }

}
