import { Component, Inject, OnInit, Optional } from '@angular/core';
import { EmployeeDataService } from '../service/employee-data.service';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  static this: any;
  fromPage: any;
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private service:EmployeeDataService
  ) {
    this.fromPage = data.projDetails;
  }
  employees:any;
  

  ngOnInit() {
    // let response= this.service.getemp();
    //   response.subscribe((data)=>this.employees=data);
    console.log(this.data.projDetails);

  }

  closeDialog() {
    this.dialogRef.afterOpened();
  }

}
