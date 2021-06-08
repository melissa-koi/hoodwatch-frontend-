import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HoodServiceService {

  all_hoods :String = "https://m-hoodwatch.herokuapp.com/api/hood/"

  constructor(private http: HttpClient) { }
    getAllNeighbourhoods() {
      return this.http.get(this.all_hoods)
    }
}
