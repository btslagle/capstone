import { Component, Input } from '@angular/core';
import { Vehicle } from './models/Vehicle';
import { VehicleService } from './vehicle.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EasyXfer';

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

  vehicles: Vehicle[] = []

  constructor(private vehicleService: VehicleService){}

  ngOnInit(): void {
      this.vehicleService.fetchVehicles().subscribe(response =>{
      this.vehicles = response.vehicles

    }) 
  }

  addVehicle(newVehicle: Vehicle){
    this.vehicleService.addVehicle(newVehicle)
  }
  updateVehicle(vehicle: Vehicle){
    this.vehicleService.editVehicle(vehicle).subscribe(response => {
      console.log(vehicle)
    })
  }
}

 