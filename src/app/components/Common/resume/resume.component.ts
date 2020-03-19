import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  @Input() CityAlert: number;
  @Input() CityNormal: number;
  @Input() CityEmergency: number;
  constructor() { }

  ngOnInit() {
  }

}

