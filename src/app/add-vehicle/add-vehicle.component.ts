import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/Vehicle';
import { VehicleService } from '../vehicle.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css'],
})
export class AddVehicleComponent {
  router: Router;
  WeatherData: any;

  weatherApiKey = environment.weatherApiKey;

  constructor(
    private vehicleService: VehicleService,
    private location: Location,
    router: Router,
    route: ActivatedRoute
  ) {
    this.router = router;
  }

  ngOnInit() {
    this.WeatherData = {
      main: {},
      isDay: true,
    };
    this.getWeatherData();
  }

  getWeatherData() {
    fetch(this.weatherApiKey)
      .then((response) => response.json())
      .then((data) => {
        this.setWeatherData(data);
      });
  }
  setWeatherData(data: any) {
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = currentDate.getTime() < sunsetTime.getTime();
    this.WeatherData.temp = this.WeatherData.main.temp.toFixed(0);
    this.WeatherData.temp_min = this.WeatherData.main.temp_min.toFixed(0);
    this.WeatherData.temp_max = this.WeatherData.main.temp_max.toFixed(0);
    this.WeatherData.temp_feels_like =
      this.WeatherData.main.feels_like.toFixed(0);
  }
  vehicles: Vehicle[] = [];

  addVehicle(newVehicle: Vehicle) {
    this.vehicleService.addVehicle(newVehicle);
    this.router.navigate(['/vehicles']);
  }
}
