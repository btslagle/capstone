import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Vehicle } from './models/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  vehicles: Vehicle[] = [{
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHQh96n6xOf8aBX1UpfateV-6aZAu77jgk7Q&usqp=CAU",
    make:"Make: Ford", 
    model:"Model: Mustang",
    year:"Year: 2023",
    condition: "Condition: Good",
    term:"Remanning Term: 13 months",
    monthly: "Monthly Payment: $650.37",
    mileage:"Mileage: 30,000", 
    location:"Location: Scottsdale, AZ 85054",
  },{
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHQh96n6xOf8aBX1UpfateV-6aZAu77jgk7Q&usqp=CAU",
    make:"Make: Ford", 
    model:"Model: Mustang",
    year:"Year: 2023",
    condition: "Condition: Good",
    term:"Remanning Term: 13 months",
    monthly: "Monthly Payment: $650.37",
    mileage:"Mileage: 30,000", 
    location:"Location: Scottsdale, AZ 85054",
  },{
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHQh96n6xOf8aBX1UpfateV-6aZAu77jgk7Q&usqp=CAU",
    make:"Make: Ford", 
    model:"Model: Mustang",
    year:"Year: 2023",
    condition: "Condition: Good",
    term:"Remanning Term: 13 months",
    monthly: "Monthly Payment: $650.37",
    mileage:"Mileage: 30,000", 
    location:"Location: Scottsdale, AZ 85054",
  }]

    fetchVehicles(){
      return of(this.vehicles)
    }
  

  constructor() { }
}


