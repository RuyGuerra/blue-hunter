import { NgModule } from '@angular/core';
import { BooksByAuthorComponent } from './books-by-author.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [BooksByAuthorComponent]
})
export class BooksByAuthorModule { }
