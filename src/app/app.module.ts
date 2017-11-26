import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { UsersModule } from './users/users.module';
import { BooksByTitleModule } from './books-by-title/books-by-title.module';
import { BooksByAuthorModule } from './books-by-author/books-by-author.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    UsersModule,
    BooksByTitleModule,
    BooksByAuthorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
