import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Neighbourhood  } from 'src/app/interfaces/neighbourhood';

const all_bus = "https://m-hoodwatch.herokuapp.com/api/hood/"
const update_bus = "https://m-hoodwatch.herokuapp.com/api/hood/update/<int:pk>/"
const delete_bus = "https://m-hoodwatch.herokuapp.com/api/hood/delete/"

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor() { }
}
