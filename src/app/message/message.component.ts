import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../models/Vehicle';
import { Location } from '@angular/common';
import { __classPrivateFieldSet } from 'tslib';

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
  
  
   
  //@Input() id?: number;
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
  
  // vehicle!: Vehicle;

   @Output() closeClick = new EventEmitter();
   vehicles?: Vehicle[];
  
  

  constructor(
    private vehicleService: VehicleService,
    private route: ActivatedRoute,
    router: Router,
    private locations: Location, 
  ) {
    this.router = router;
 }
 id = Number(this.route.snapshot.paramMap.get("id"));
 ngOnInit() {
  this.getVehicle()
 }

 getVehicle(){
   this.vehicleService.getVehicleById(this.id )
   .subscribe(response => this.vehicle = response)
   console.log(this.id)
 }

 
 close(){
  window.location.reload();

}
}