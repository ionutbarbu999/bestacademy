import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerCoursesListComponent } from './summer-courses-list.component';

describe('SummerCoursesListComponent', () => {
  let component: SummerCoursesListComponent;
  let fixture: ComponentFixture<SummerCoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummerCoursesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummerCoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
