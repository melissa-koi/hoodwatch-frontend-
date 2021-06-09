import { Component, OnInit } from '@angular/core';
import { Business  } from 'src/app/interfaces/business';
import { BusinessService  } from '../../../services/business/business.service';


@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  business: Business = {
    business_name: '',
    email: '',
    neighborhood: '',
  };
  submitted = false;
  
  businesses: any;
  constructor(private bservice:BusinessService) {}

  ngOnInit(): void {
    this.AllBusinesses()
  }

  //ADD NEIGHBOURHOOD 
  AllBusinesses() {
    this.bservice.getAllBusinesses().subscribe(data => {this.businesses = data; console.log(this.businesses); }, error => {console.log(error);})}


}
