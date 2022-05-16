import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';



const material=[
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatTableModule,
  MatDialogModule,
  MatIconModule,
  MatCheckboxModule,
  MatFormFieldModule,
  FormsModule
]

@NgModule({
  
  imports: [material],
 

exports: [material]
})
export class MaterialModule { }
