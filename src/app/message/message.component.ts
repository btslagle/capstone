import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../models/Vehicle';
import { Location } from '@angular/common';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent   {
  public loading: boolean= false;
  public vehicleId:string | null = null;
  edit: boolean = false;
  selectedVehicle!: Vehicle;
  
  
   router: Router;
   @Input() id?: number;
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
  
  
  

  constructor(
    private vehicleService: VehicleService,
    private activatedRoute: ActivatedRoute,
    router: Router,
    private locations: Location,
  ) {
    this.router = router;
  
}
}