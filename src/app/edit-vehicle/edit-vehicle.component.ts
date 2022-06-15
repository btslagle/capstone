import { Component,  Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../models/Vehicle';
import { VehicleService } from '../vehicle.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent  {
  vehicles: Vehicle[] = []
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

  constructor(private vehicleService: VehicleService, private route: ActivatedRoute){}

  updateVehicle(updateVehicle: Vehicle){
    this.vehicleService.editVehicle(updateVehicle)
  }

}
