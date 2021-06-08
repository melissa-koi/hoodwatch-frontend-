import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Neighbourhood  } from 'src/app/interfaces/neighbourhood';

const all_hoods = "https://m-hoodwatch.herokuapp.com/api/hood/"
const update_hoods = "https://m-hoodwatch.herokuapp.com/api/hood/update/<int:pk>/"
const delete_hoods = "https://m-hoodwatch.herokuapp.com/api/hood/delete/"

@Injectable({
  providedIn: 'root'
})
export class HoodServiceService {

  constructor(private http: HttpClient) { }

    getAllNeighbourhoods() {
      console.log( this.http.get(all_hoods))
      return this.http.get(all_hoods)
    }

    getById(id: any) {
      return this.http.get(`${all_hoods}${id}/`)
    }

    create(neighbourhood: { name:any, location: any, occupants_count: any }) {
      return this.http.post(all_hoods, neighbourhood)
    }

    update(id: any, neighbourhood: Neighbourhood) {
      return this.http.put(`${update_hoods}${id}/`, neighbourhood)
    }

    delete(id: any){
      return this.http.delete(`${delete_hoods}${id}/`)
    }
    
}
