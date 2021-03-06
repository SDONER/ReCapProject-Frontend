import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:44381/api/';
  constructor(private httpClient: HttpClient) {}

  getColors():Observable<ListResponseModel<Color>> {
    let newPath = this.apiUrl + "colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  getColorsByColorId(colorId:number):Observable<ListResponseModel<Color>> {
    let newPath = this.apiUrl + 'cars/GetCarsByColorId?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }


  postColor(color:Color):Observable<ResponseModel> {
    let newPath = this.apiUrl + "colors/add" 
    return this.httpClient.post<ResponseModel>(this.apiUrl + "colors/add", color);
  }
}
