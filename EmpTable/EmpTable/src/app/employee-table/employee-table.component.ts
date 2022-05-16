import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeDataService } from '../service/employee-data.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort,MatSortable } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';







@Component({
  selector: 'employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
 
  
  public searchTerm:string='';

  
  @ViewChild(MatSort)sort!: MatSort;
  @ViewChild('paginator') paginator! : MatPaginator;
dataSource!:MatTableDataSource<any>;
displayedColumns =['actions','empId','empName','mobileNumber','emailId','officeTransport','cafeteriaSubscription','Button'];
  sendValue: any;
  dialogValue: any;
  employee: any;

  
constructor(private service: EmployeeDataService,public dialog:MatDialog,
) {}




  ngOnInit() {
    this.service.getemp().subscribe((response:any) =>{
    this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  
  openDialog(employee:any){
    console.log(employee);
    const dialogRef = this.dialog.open(DialogBoxComponent, {
    //  height:'250px',
      width: '250px',
      // backdropClass: 'custom-dialog-backdrop-class',
      // panelClass: 'custom-dialog-panel-class',
      data: { projDetails:employee }
    });
  }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    filterData($event : any){
      this.dataSource.filter = $event.target.value;
    }
    editDetails(emp:any){
      console.log(emp);

    }
}

