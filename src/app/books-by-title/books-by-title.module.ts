import { NgModule } from '@angular/core';
import { BooksByTitleComponent } from './books-by-title.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [BooksByTitleComponent]
})
export class BooksByTitleModule { }

