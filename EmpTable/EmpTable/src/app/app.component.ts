import { Component } from '@angular/core';
import { EmployeeDataService } from './service/employee-data.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee_Table5';

 
constructor(private service:EmployeeDataService,public dialog:MatDialog) { }
employees:any;

  
  
openDialog(){

  this.dialog.open(DialogBoxComponent);
}
}
