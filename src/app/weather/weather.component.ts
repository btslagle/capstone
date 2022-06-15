import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { of, Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

export type Weather= {
  name:string;
  region:string;
  temp_f: number;


}

const baseWeatherURL = 'http:api.weatherapi.com/v1/current.json?key=c1bee2b63a354d23b0931043221306&q=38401' 

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather: Weather[]= [];

  constructor(private weatherServic: WeatherService) { }
  fetchWeather(){
    
  }
  ngOnInit(): void {
    
  }

}
