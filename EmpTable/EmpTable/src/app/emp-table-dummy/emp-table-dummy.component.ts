import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { User } from '../model/user.model';
import { EmployeeDataService } from '../service/employee-data.service';

@Component({
  selector: 'app-emp-table-dummy',
  templateUrl: './emp-table-dummy.component.html',
  styleUrls: ['./emp-table-dummy.component.css']
})
export class EmpTableDummyComponent implements OnInit {
 
  public searchTerm:string='';
  form!: FormGroup;
  users: User[] = [];
  
  @ViewChild(MatSort)sort!: MatSort;
  @ViewChild('paginator') paginator! : MatPaginator;
dataSource!:MatTableDataSource<any>;
displayedColumns =['empId','empName','mobileNumber','emailId','officeTransport','cafeteriaSubscription','Button'];
  sendValue: any;
  dialogValue: any;
  employee: any;
  tableForm!: FormGroup;
  
constructor(private service: EmployeeDataService,public dialog:MatDialog,
  private _formBuilder: FormBuilder
) {}
 ngOnInit() {
    // this.service.getemp().subscribe((response:any) =>{
    // this.dataSource = new MatTableDataSource(response);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // })
    this.form = this._formBuilder.group({
      albums: this._formBuilder.array([])
    });
    this.service.getemp().subscribe(albums => {
      // this.form.setControl('albums', albums);
      this.dataSource = new MatTableDataSource((this.form.get('albums') as FormArray).controls);
      this.dataSource.filterPredicate = (data: FormGroup, filter: string) => 
      { 
          return Object.values(data.controls).some(x => x.value == filter); 
        };
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    
  });
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
