import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatTableModule
  ],
  exports: [TableComponent]
})
export class SharedModule { }
