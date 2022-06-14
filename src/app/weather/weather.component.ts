import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { of, Observable } from 'rxjs';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  

  constructor(private weatherServic: WeatherService) { }

  ngOnInit(): void {
    
  }

}
