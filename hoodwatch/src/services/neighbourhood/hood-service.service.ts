import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { neighborhood } from 'src/app/';

const all_hoods = "https://m-hoodwatch.herokuapp.com/api/hood/"
const update_hoods = "https://m-hoodwatch.herokuapp.com/api/hood/update/<int:pk>/"
const delete_hoods = "https://m-hoodwatch.herokuapp.com/api/hood/hood/delete/<int:pk>/"

@Injectable({
  providedIn: 'root'
})
export class HoodServiceService {

  constructor(private http: HttpClient) { }

    getAllNeighbourhoods() {
      return this.http.get(all_hoods)
    }

    getById(id: any) {
      return this.http.get(`${all_hoods}${id}/`)
    }

    create(neighbourhood: { business_name: string, email: string, user: any, neighbourhood: any }) {
      return this.http.post(all_hoods, neighbourhood)
    }

    update(id: any, neighbourhood: Neighborhood) {
      return this.http.put(`${update_hoods}${id}/`, neighbourhood)
    }
}
