import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-listing',
  templateUrl: './vehicle-listing.component.html',
  styleUrls: ['./vehicle-listing.component.css']
})
export class VehicleListingComponent  {
  @Input() imageUrl!: string
  @Input() make!: string;
  @Input() model!: string;
  @Input() year!: number;
  @Input() condition!: string;
  @Input() term!: number;
  @Input() monthly!: number;
  @Input() mileage!: number;
  @Input() location!: string;


}
