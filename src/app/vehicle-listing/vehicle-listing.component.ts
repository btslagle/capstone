import { Component, Input } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../models/Vehicle';
@Component({
  selector: 'app-vehicle-listing',
  templateUrl: './vehicle-listing.component.html',
  styleUrls: ['./vehicle-listing.component.css']
})
export class VehicleListingComponent  {
  @Input()id? : number;
  @Input() imageUrl!: string
  @Input() make!: string;
  @Input() model!: string;
  @Input() year!: string;
  @Input() condition!: string;
  @Input() term!: string;
  @Input() monthly!: string;
  @Input() mileage!: string;
  @Input() location!: string;



  constructor(private vehicleService: VehicleService){}
  onDeleteVehicle() {
    this.vehicleService.deleteVehicle(this.id).subscribe();
   
    

}
}