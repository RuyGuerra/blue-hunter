import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksByTitleComponent } from './books-by-title.component';

describe('BooksByTitleComponent', () => {
  let component: BooksByTitleComponent;
  let fixture: ComponentFixture<BooksByTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksByTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksByTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
