import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopsHeroComponent } from './workshops-hero.component';

describe('WorkshopsHeroComponent', () => {
  let component: WorkshopsHeroComponent;
  let fixture: ComponentFixture<WorkshopsHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopsHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopsHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
