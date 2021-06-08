import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const all_hoods = "https://m-hoodwatch.herokuapp.com/api/hood/"
const update_hoods = "https://m-hoodwatch.herokuapp.com/api/hood/update/<int:pk>/"
const delete_hoods = "https://m-hoodwatch.herokuapp.com/api/hood/hood/delete/<int:pk>/"

@Injectable({
  providedIn: 'root'
})
export class HoodServiceService {

  constructor(private http: HttpClient) { }
    getAllNeighbourhoods() {
      return this.http.get(this.all_hoods)
    }
}
