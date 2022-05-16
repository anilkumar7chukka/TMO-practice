import { Component } from '@angular/core';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee_Table3';
  
  constructor(public dailog : MatDialog){}
  
  
  openDialog(){
    
    this.dailog.open(DialogBoxComponent);
  }
    
}
