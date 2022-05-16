import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { employ } from '../employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {


  

//   private _url="assets/employeeData.json";
  constructor(private http:HttpClient) { }
//   getemp():Observable<employ[]>{

//     return this.http.get<employ[]>(this._url);
// }
public getemp(){
  return this.http.get("https://9e2c3c00-7bda-4dd4-98f7-b4cf3bedca59.mock.pstmn.io/employee");
}
}
