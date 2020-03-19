import { Component, Input, OnInit } from '@angular/core';
import { City, CityWithAirs } from 'src/app/Models/city';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css']
})
export class CityCardComponent implements OnInit {
  @Input() CityComplete: CityWithAirs;
  constructor() { }

  ngOnInit() {
  }

}
