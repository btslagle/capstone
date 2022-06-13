import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

type WeatherResponse = {
  response: Response;
  }

const baseWeatherApi= 'http://api.weatherapi.com/v1/current.json?Weather_API_Key &q';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
weather: WeatherService[] = []

  constructor(private http: HttpClient) {}
  fetchVehicles() {
    return this.http.get<WeatherResponse>(baseWeatherApi).subscribe(response => {
      this.weather
    })
  }
}


