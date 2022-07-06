import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../models/Vehicle';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-vehicle-listing',
  templateUrl: './vehicle-listing.component.html',
  styleUrls: ['./vehicle-listing.component.css'],
})
export class VehicleListingComponent {
  edit: boolean = false;
  selectedVehicle?: Vehicle;
  vehicles!: Vehicle[];

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
  @Output() deleteClick = new EventEmitter();

  constructor(
    private vehicleService: VehicleService,
    private route: ActivatedRoute,
    router: Router,
    private locations: Location
  ) {
    this.router = router;
  }
  ngOnInit(): void {
     
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

  onDeleteVehicle() {
    this.deleteClick.emit(this.vehicle);
  }

  updateVehicle(updatedVehicle: Vehicle) {
    this.vehicleService.updateVehicle(updatedVehicle);
    this.toggleEdit();
  }

  }

