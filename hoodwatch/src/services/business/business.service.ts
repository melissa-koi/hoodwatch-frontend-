import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Neighbourhood  } from 'src/app/interfaces/neighbourhood';

const all_bus = "https://m-hoodwatch.herokuapp.com/api/business/"
const update_bus = "https://m-hoodwatch.herokuapp.com/api/business/update/"
const delete_bus = "https://m-hoodwatch.herokuapp.com/api/business/delete/"

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http: HttpClient) { }

  // getAllBusinesses() {
  //   console.log( this.http.get(all_bus))
  //   return this.http.get(all_bus)
  // }
}
