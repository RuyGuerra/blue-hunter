import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UserService } from './services/user.service';
import { BookService } from './services/book.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    BrowserAnimationsModule,
    ToolbarComponent
  ],
  declarations: [
    ToolbarComponent
  ],
  providers: [
    UserService,
    BookService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
