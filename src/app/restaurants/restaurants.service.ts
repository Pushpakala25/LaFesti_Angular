import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http:HttpClient) { }
  
  getData()
  {
    let url="/rest/restaurant";
    return this.http.get(url);
  }

  getDataByDeliveryTime () {
    let url="/rest/restaurant/deliveryTime";
    return this.http.get(url);
  }

  getDataByCuisines() {
    let url="/rest/restaurant/Cuisines";
    return this.http.get(url);
  }

  getDataByReviews() {
    let url="/rest/restaurant/Reviews";
    return this.http.get(url);
  }

  getDataByRating() {
    let url="/rest/restaurant/Rating";
    return this.http.get(url);
  }

  filterByVegOnly(){
    let url="/rest/restaurant/VegOnly";
    return this.http.get(url);
  }

}
