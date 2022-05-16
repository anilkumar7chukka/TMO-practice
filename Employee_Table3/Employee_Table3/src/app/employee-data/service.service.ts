import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { employ } from '../employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  private _url="assets/employeeData.json";
  search: any;
  constructor(private http:HttpClient) { }
  getemp():Observable<employ[]>{

    return this.http.get<employ[]>(this._url);
}
}
