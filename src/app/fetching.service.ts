import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn : 'root'
})

export class FetchingService {
    constructor(private http: HttpClient){}
    
    getPokemons(offset) : Observable<any> {
        return this.http.get('https://pokeapi.co/api/v2/pokemon?offset=' +offset +'&limit=20');
    }
}