import { Component, OnInit} from '@angular/core';
import { Vehicle } from '../models/Vehicle';
import { VehicleService } from '../vehicle.service';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicles: Vehicle[] = []

  constructor(private vehicleService: VehicleService){}

  ngOnInit(): void {
      this.vehicleService.fetchVehicles().subscribe(response =>{
      this.vehicles = response.vehicles

    }) 
  }

  addVehicle(newVehicle: Vehicle){
    this.vehicleService.addVehicle(newVehicle).subscribe(response => {
      this.vehicles = [response.vehicle,...this.vehicles]
    })
  }
  

}
