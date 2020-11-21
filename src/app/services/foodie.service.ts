import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1';
const apiUrl = {
  SEARCH: `${API_ENDPOINT}/search.php`,
};

@Injectable({
  providedIn: 'root'
})
export class FoodieService {
  constructor(private http: HttpClient) { }
  search(searchText: string){
     return this.http.get(`${apiUrl.SEARCH}?s=${searchText}`);
  }
  autoComplete(searchText: string){
    return this.http.get(`${apiUrl.SEARCH}?f=${searchText}`);
 }
}
