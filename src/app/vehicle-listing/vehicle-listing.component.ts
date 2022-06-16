import { Component, Input } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../models/Vehicle';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vehicle-listing',
  templateUrl: './vehicle-listing.component.html',
  styleUrls: ['./vehicle-listing.component.css'],
})
export class VehicleListingComponent {
  edit: boolean = false;
  vehicle: any;
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

  constructor(
    private vehicleService: VehicleService,
    private route: ActivatedRoute,
    router: Router
  ) {
    this.router = router;
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

  onDeleteVehicle() {
    this.vehicleService.deleteVehicle(this.id).subscribe();
  }

  updateVehicle(updatedVehicle: Vehicle) {
    this.vehicleService.updateVehicle(updatedVehicle);
  }
}
