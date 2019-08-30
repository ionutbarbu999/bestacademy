import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerCoursesArticlesComponent } from './summer-courses-articles.component';

describe('SummerCoursesArticlesComponent', () => {
  let component: SummerCoursesArticlesComponent;
  let fixture: ComponentFixture<SummerCoursesArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummerCoursesArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummerCoursesArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
