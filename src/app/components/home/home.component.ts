import { Component, OnInit,DoCheck, AfterContentChecked } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/Services/api.service';
import { City, CityWithAirs } from 'src/app/Models/city';
import { CityAirs } from 'src/app/Models/city-airs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,DoCheck {
  Cities: City[];  
  public CountCityAlert:number;
  public CountCityNormal:number;
  public CountCityEmergency:number;  
  CityWithAirs:CityWithAirs[];
  cityAirFilter:string;
  constructor(private api:ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private title: Title,
    ) { 
     
    }

    getFilter(){
      this.activatedRoute.params.subscribe((parameters: any) => {
        this.cityAirFilter=parameters['id'];
        
        if(this.cityAirFilter!=null){
          if(Number(this.cityAirFilter)>3){
             this.router.navigate(['/Home']);
          }
          this.title.setTitle(`Detalle Aire Tipo: -${this.cityAirFilter} `);
        }
        this.Inicialize();
      });
    }
  
    ngDoCheck(){
   
      
    }
   
    ngOnInit(){
this.getFilter();

    }

  Inicialize() {

    this.api.GetCities().subscribe((response: City[]) => {
      this.Cities = response;   
    },
    error => {      
    console.log('error');
    });

    this.api.GetAir().subscribe((responseAIr:CityWithAirs[])=>{
   
      var newList= responseAIr.map((responseItem,index)=>{
      
        var responseFindCity= this.Cities.find(o=>Number(o.Id)==responseItem.CityId);
        
        return (<CityWithAirs>(Object.assign({},{NameCity:responseFindCity.Name},responseItem)));
      });

      this.CityWithAirs=newList;
      this.CountCityAlert=this.CityWithAirs.filter(c=>c.AirQuality==1).length;
      this.CountCityNormal=this.CityWithAirs.filter(c=>c.AirQuality==0).length;
      this.CountCityEmergency=this.CityWithAirs.filter(c=>c.AirQuality==2).length;

      
      var result=this.cityAirFilter;
      
      if(this.cityAirFilter!=null){
       this.CityWithAirs= this.CityWithAirs.filter(function(value){        
         return value.AirQuality==Number(result);
       });
      }
    },error=>{
      console.log('error');  

    })
    
    
    
  }

}
