import { Component, OnInit } from '@angular/core';
import { HoodServiceService } from '../../../services/neighbourhood/hood-service.service'
import { Neighbourhood  } from 'src/app/interfaces/neighbourhood';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hood',
  templateUrl: './hood.component.html',
  styleUrls: ['./hood.component.scss']
})
export class HoodComponent implements OnInit {

  hood: Neighbourhood = {
    name: '',
    location: '',
    occupants_count: '',
  };
  submitted = false;
  
  hoods: any;
  constructor(private hservice:HoodServiceService,private router:Router) {}

  ngOnInit(): void {
    this.AllHoods()
  }

  //ADD NEIGHBOURHOOD 
  AllHoods() {
    this.hservice.getAllNeighbourhoods().subscribe(data => {this.hoods = data; console.log(this.hoods); }, error => {console.log(error);})}

  saveNeighbourhood(): void {
    const data = {
      name: this.hood.name,
      location: this.hood.location,
      occupants_count: this.hood.occupants_count,
    };

    this.hservice.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  addNeighbourhood() {
    this.submitted = false;
    this.hood = {
      name: '',
      location: '',
      occupants_count: ''
    };
  }

  //DELETE NEIGHBOUR and Refresh

  deleteNeighbourhood(id:any){
    this.hservice.delete(id)
      .subscribe(
        response => {
          console.log(response);
          this.AllHoods()
        },
        error => {
          console.log(error);
        });
  }

}
