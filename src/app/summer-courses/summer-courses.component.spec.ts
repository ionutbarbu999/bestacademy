import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerCoursesComponent } from './summer-courses.component';

describe('SummerCoursesComponent', () => {
  let component: SummerCoursesComponent;
  let fixture: ComponentFixture<SummerCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummerCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummerCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
