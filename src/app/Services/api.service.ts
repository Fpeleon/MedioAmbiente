import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { City } from '../Models/city';
import { CityAirs } from '../Models/city-airs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  GetCities() {
    

    return  this.http.get<City[]>(environment.baseUrl);
    
   }
   GetAir(){
    return  this.http.get<CityAirs[]>(environment.baseUrlAir);    
   }
}
