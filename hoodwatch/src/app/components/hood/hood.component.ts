import { Component, OnInit } from '@angular/core';
import { HoodServiceService } from '../../../services/neighbourhood/hood-service.service'
import { Neighbourhood  } from 'src/app/interfaces/neighbourhood';

@Component({
  selector: 'app-hood',
  templateUrl: './hood.component.html',
  styleUrls: ['./hood.component.scss']
})
export class HoodComponent implements OnInit {

  neighbourhood: Neighbourhood= {
    id: '',
    name: '',
    location: '',
    occupants_count: '',
  } 

  hoods: any;

  constructor(private hservice:HoodServiceService) {}

  ngOnInit(): void {
  }

  AllHoods() {
    this.hservice.getAllNeighbourhoods().subscribe(hoods => {this.hoods = hoods; console.log(this.hoods); })
  }

  getNeighbourhood() {
    this.hservice.getAllNeighbourhoods().subscribe(hoods => {this.hoods = hoods; console.log(this.hoods); })
  }

}
