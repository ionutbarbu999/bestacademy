import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerCoursesHeroComponent } from './summer-courses-hero.component';

describe('SummerCoursesHeroComponent', () => {
  let component: SummerCoursesHeroComponent;
  let fixture: ComponentFixture<SummerCoursesHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummerCoursesHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummerCoursesHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
