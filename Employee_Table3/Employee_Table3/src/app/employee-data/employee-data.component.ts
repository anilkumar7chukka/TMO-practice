import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeDataService } from './service.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {
  
  public searchTerm:string='';
 
 


  dataSource!:MatTableDataSource<any>;
displayedColumns =['actions','empId','empName','mobileNumber','emailId','officeTransport','cafeteriaSubscription','Button'];
 
constructor(private service: EmployeeDataService,public dialog:MatDialog,
 
 
  ) {}
  ngOnInit() {
   
    this.service.getemp().subscribe((response:any) =>{
      this.dataSource = new MatTableDataSource(response);
    });
 


  }
 
 
  openDialog(employee:any){
   console.log(employee);
    this.dialog.open(DialogBoxComponent);
  }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}

