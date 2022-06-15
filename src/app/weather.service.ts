import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

type WeatherResponse = {
  response: Response;
  }
  const baseWeatherURL = 'http:api.weatherapi.com/v1/current.json?key=c1bee2b63a354d23b0931043221306&q=38401' 
const baseWeatherApi= 'http://api.weatherapi.com/v1/current.json?Weather_API_Key &q';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
weather: WeatherService[] = []

  constructor(private http: HttpClient) {}
  fetchWeather() {
    this.http.get<WeatherResponse>(baseWeatherURL).subscribe(response => {
      this.weather
      console.log(response)
      
    })
  }


}


