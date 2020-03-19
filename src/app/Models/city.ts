import { CityAirs } from './city-airs';

export interface City {   
        Id: string;
        Name: string;
        Country: string;
        AlertDevicesCount: number;
        WarningDevicesCount: number;
        NormalDevicesCount: number;
        CityAir:CityAirs;
}

export interface CityWithAirs {   
        Id: string;
        Country: string;
        AlertDevicesCount: number;
        NameCity:string;
        WarningDevicesCount: number;
        NormalDevicesCount: number;
        Name: string;
        LastActivity: Date;
        Temperature: number;
        CityId: number;
        StormLevel: string;
        AirQuality: number;
}