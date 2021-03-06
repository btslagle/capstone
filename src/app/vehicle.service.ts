import { Injectable } from '@angular/core';
import { Vehicle } from './models/Vehicle';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';

type VehiclesResponse = {
  vehicles: Vehicle[];
  selectedvehicle: Vehicle;
}

type VehicleResponse = {
  vehicle: Vehicle;
}

export interface LocationResponse{
  region: string;
  city:string;
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

  public getVehicle(id:any):Observable<Vehicle>{
    return  this.http.get<Vehicle>(`${vehiclesEndpoint}/${id}`)
  }

  addVehicle(vehicle: Vehicle){
    return this.http.post<VehicleResponse>(vehiclesEndpoint, vehicle).subscribe(response => {
      this.vehicles = [response.vehicle,...this.vehicles]
    });
  }

  updateVehicle(vehicle: Vehicle){
    return this.http.put<VehicleResponse>(`${vehiclesEndpoint}/${vehicle.id}`, vehicle).subscribe(response => {
      this.vehicles=[response.vehicle]
    })
  }

  getVehicleById(id:number): Observable<Vehicle | any>{
    return this.fetchVehicles().pipe(
      map((response) => response.vehicles
      .find((vehicle) => vehicle.id === id))
    );
}
  deleteVehicle(id: any) {
  return this.http.delete<Vehicle>(`${vehiclesEndpoint}/${id}`);
  
}
  getLocation(){
  this.http.get<LocationResponse>('http://ip-api.com/json/')
  
}

//getProductById(id: number): Observable<Product | undefined> {
//  return this.getProducts().pipe(
//    map((response) => response.products
//    .find((product) => product.id === id))
//  );
}


