import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ChipsModule } from 'primeng/chips';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ChipsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    TableModule,
    ChipsModule
  ]
})
export class SharedModule { }
