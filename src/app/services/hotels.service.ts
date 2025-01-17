import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotel } from '../interface/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  private apiURL = 'http://localhost:8082/api/hotels/available';

  constructor(private http: HttpClient) { }

  getHotels(startDate: string, endDate: string, cityId: number) {
    return this.http.get<Hotel[]>(`${this.apiURL}?startDate=${startDate}&endDate=${endDate}&cityId=${cityId}`);
  }
}
