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

  //ADD BUSINESS 
  AllBusinesses() {
    this.bservice.getAllBusinesses().subscribe(data => {this.businesses = data; console.log(this.businesses); }, error => {console.log(error);})}

  saveBusiness(): void {
    const data = {
      business_name: this.business.business_name,
      email: this.business.email,
      neighborhood: this.business.neighborhood,
    };

    this.bservice.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  addBusiness() {
    this.submitted = false;
    this.business = {
      business_name: '',
      email: '',
      neighborhood: ''
    };
  }

  //DELETE BUSINESS and Refresh

  deleteBusiness(id:any){
    this.bservice.delete(id)
      .subscribe(
        response => {
          console.log(response);
          console.log("got here")
          this.AllBusinesses()
        },
        error => {
          console.log(error);
        });
  }
}
