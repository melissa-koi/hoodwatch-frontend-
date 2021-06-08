import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hood',
  templateUrl: './hood.component.html',
  styleUrls: ['./hood.component.scss']
})
export class HoodComponent implements OnInit {
  hoods: any;
  constructor(private hservice:HoodServiceService)
  constructor() { }

  ngOnInit(): void {
  }

}
