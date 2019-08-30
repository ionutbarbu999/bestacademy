import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerCoursesBarComponent } from './summer-courses-bar.component';

describe('SummerCoursesBarComponent', () => {
  let component: SummerCoursesBarComponent;
  let fixture: ComponentFixture<SummerCoursesBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummerCoursesBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummerCoursesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
