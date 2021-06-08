import { Component, OnInit } from '@angular/core';
import { HoodServiceService } from '../../../services/neighbourhood/hood-service.service'
import { Neighbourhood  } from 'src/app/interfaces/neighbourhood';

@Component({
  selector: 'app-hood',
  templateUrl: './hood.component.html',
  styleUrls: ['./hood.component.scss']
})
export class HoodComponent implements OnInit {

  hoods: any;
  constructor(private hservice:HoodServiceService) {}

  ngOnInit(): void {
    this.AllHoods()
  }

  AllHoods() {
    this.hservice.getAllNeighbourhoods().subscribe(data => {this.hoods = data; console.log(this.hoods); }, error => {console.log(error);})}

  // getNeighbourhood() {
  //   this.hservice.getById().subscribe(hoods => {this.hoods = hoods; console.log(this.hoods); })
  // }

}
