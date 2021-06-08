import { Component, OnInit } from '@angular/core';
import { HoodServiceService } from '../../../services/neighbourhood/hood-service.service'

@Component({
  selector: 'app-hood',
  templateUrl: './hood.component.html',
  styleUrls: ['./hood.component.scss']
})
export class HoodComponent implements OnInit {
  hoods: any;
  constructor(private hservice:HoodServiceService) {}

  ngOnInit(): void {
  }
  AllHoods() {
    this.hservice.getAllPost().subscribe(hoods => {this.hoods = hoods; console.log(this.hoods); })
  }
}
