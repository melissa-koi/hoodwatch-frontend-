import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const all_hoods = "https://m-hoodwatch.herokuapp.com/api/hood/"
const update_hoods = 
const delete_hoods = 

@Injectable({
  providedIn: 'root'
})
export class HoodServiceService {

  constructor(private http: HttpClient) { }
    getAllNeighbourhoods() {
      return this.http.get(this.all_hoods)
    }
}
