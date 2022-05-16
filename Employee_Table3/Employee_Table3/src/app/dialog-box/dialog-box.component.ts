import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeDataComponent } from '../employee-data/employee-data.component';

import { EmployeeDataService } from '../employee-data/service.service';



const Employee_Data:any=[];
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

//   constructor(private service:EmployeeDataService) { }
//   employees:any;
  

//   ngOnInit(): void {
//     let response= this.service.getemp();
//       response.subscribe((data)=>this.employees=data);
//   }
// }

fromPage: string;
  fromDialog!: string;
  employees:any;

constructor(
  public dialogRef: MatDialogRef<DialogBoxComponent>,
  @Optional() @Inject(MAT_DIALOG_DATA) public data: any,private service:EmployeeDataService
) {
  this.fromPage = data.pageValue;
}
ngOnInit() {

    let response= this.service.getemp();
      response.subscribe((data)=>this.employees=data);
  
}
closeDialog() {
  this.dialogRef.id;
}
}