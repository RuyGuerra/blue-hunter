import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    SearchBarComponent,
    FormsModule
  ],
  declarations: [
    SearchBarComponent
  ]
})
export class SharedModule { }
