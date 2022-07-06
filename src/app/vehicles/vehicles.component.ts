import { Component, Input, OnInit} from '@angular/core';
import { Vehicle } from '../models/Vehicle';
import { VehicleService } from '../vehicle.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})


export class VehiclesComponent implements OnInit {
  public loading:boolean = false;
  public vehicles: Vehicle[] = []
  selectedVehicle: Vehicle | undefined;
  @Input() id!: number;
  @Input() imageUrl!: string;
  @Input() make!: string;
  @Input() model!: string;
  @Input() year!: string;
  @Input() condition!: string;
  @Input() term!: string;
  @Input() monthly!: string;
  @Input() mileage!: string;
  @Input() location!: string;
  @Input() vehicle!: Vehicle;
  router: Router;
 

  constructor(private vehicleService: VehicleService,router: Router,
    route: ActivatedRoute
  ) {
    this.router = router;
  }

  ngOnInit(): void {
      this.loading = true;
      this.vehicleService.fetchVehicles().subscribe(response =>{
      this.vehicles = response.vehicles
      this.loading = false;

    }) 
  }

  addVehicle(newVehicle: Vehicle){
    this.vehicleService.addVehicle(newVehicle)
    
  }

  updateVehicle(updateVehicle: Vehicle){
    this.vehicleService.updateVehicle(updateVehicle)
  }

  deleteVehicle(deletedVehicle: Vehicle){
    this.vehicleService.deleteVehicle(deletedVehicle.id).subscribe(()=>{
      this.vehicles = this.vehicles.filter(v =>v.id !== deletedVehicle.id)
    });

  }

  
  onSelect(vehicle: Vehicle) {
    this.selectedVehicle = vehicle;
    
    
   
    
    
   
 
    
    
    
  }


  

}
