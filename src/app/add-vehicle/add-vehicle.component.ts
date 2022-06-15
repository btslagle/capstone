import { Component } from '@angular/core';
import { Vehicle } from '../models/Vehicle';
import { VehicleService } from '../vehicle.service';
@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent  {
  
  
  constructor(private vehicleService: VehicleService){}
  vehicles: Vehicle[] = []
  
  addVehicle(newVehicle: Vehicle){
    this.vehicleService.addVehicle(newVehicle)}
}
