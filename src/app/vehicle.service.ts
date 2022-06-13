import { Injectable } from '@angular/core';
import { Vehicle } from './models/Vehicle';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

type VehiclesResponse = {
  vehicles: Vehicle[];
};

type VehicleResponse = {
  vehicle: Vehicle;
}

const vehiclesEndpoint = `${environment.baseApiUrl}/vehicles`
@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  vehicles: Vehicle[] = [];

  constructor(private http: HttpClient) {}
  fetchVehicles() {
    return this.http.get<VehiclesResponse>(vehiclesEndpoint);
  }

  addVehicle(vehicle: Vehicle){
    return this.http.post<VehicleResponse>(vehiclesEndpoint, vehicle);
  }

}
