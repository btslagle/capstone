import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
@Input() make!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
