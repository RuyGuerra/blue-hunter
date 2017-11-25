import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { BooksByAuthorComponent } from './books-by-author/books-by-author.component';
import { BooksByTitleComponent } from './books-by-title/books-by-title.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'books-by-title', component: BooksByTitleComponent },
  { path: 'books-by-author', component: BooksByAuthorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
