import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Business  } from 'src/app/interfaces/business';

const all_bus = "https://m-hoodwatch.herokuapp.com/api/business/"
const update_bus = "https://m-hoodwatch.herokuapp.com/api/business/update/"
const delete_bus = "https://m-hoodwatch.herokuapp.com/api/business/delete/"

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http: HttpClient) { }

  getAllBusinesses() {
    console.log( this.http.get(all_bus))
    return this.http.get(all_bus)
  }

  getById(id: any) {
    return this.http.get(`${all_bus}${id}/`)
  }

  create(businesses: { business_name:any, email: any, neighborhood: any }) {
    return this.http.post(all_bus, businesses)
  }

  update(id: any, business: Business) {
    return this.http.put(`${update_bus}${id}/`, business)
  }

  delete(id: any){
    return this.http.delete(`${delete_bus}${id}/`)
  }
}
