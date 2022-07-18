import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http : HttpClient) { }

  private _getItems = "http://localhost:8000/api/getItems"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', 
   })
  }

  getItems() {
    return this.http.get<any[]>(this._getItems, this.httpOptions);
  }
}
