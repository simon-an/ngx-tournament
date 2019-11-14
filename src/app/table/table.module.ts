import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from './../shared/shared.module';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TablePageComponent } from './table-page/table-page.component';


@NgModule({
  declarations: [TablePageComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    SharedModule,
    MatListModule,
    MatToolbarModule
  ]
})
export class TableModule { }
