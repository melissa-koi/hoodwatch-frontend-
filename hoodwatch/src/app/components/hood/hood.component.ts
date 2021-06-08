import { Component, OnInit } from '@angular/core';
import { HoodServiceService } from '../../../services/neighbourhood/hood-service.service'
import { Neighbourhood  } from 'src/app/interfaces/neighbourhood';
import { FormGroup, FormControl } from '@angular/forms';

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
  constructor(private hservice:HoodServiceService) {}

  ngOnInit(): void {
    this.AllHoods()
  }

  AllHoods() {
    this.hservice.getAllNeighbourhoods().subscribe(data => {this.hoods = data; console.log(this.hoods); }, error => {console.log(error);})}

  saveNeighbor(): void {
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

  newNeighbor() {
    this.submitted = false;
    this.hood = {
      name: '',
      location: '',
      occupants_count: ''
    };
  }
}
