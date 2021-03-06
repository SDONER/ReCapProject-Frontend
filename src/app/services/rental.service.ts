import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentDetail } from '../models/rentDetail';


@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44381/api/';
  rent:RentDetail;
  constructor(private httpClient: HttpClient) {}

  getRentals():Observable<ListResponseModel<Rental>> {
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
  }

  getRentalByBrandName(carId:number):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + 'rentals/getrentdetails?brandId=' + carId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getRentalByCustomerName(customerId:number):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + 'rentals/getcustomerdetails?customerId=' + customerId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getRentDetails(carId:number):Observable<ListResponseModel<RentDetail>>{
    console.log("hello")
    let newPath=this.apiUrl+ "rentals/getrentdetails?carId=" + carId 
    return this.httpClient.get<ListResponseModel<RentDetail>>(newPath);
  }
}
