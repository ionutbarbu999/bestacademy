import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesHeroComponent } from './languages-hero.component';

describe('LanguagesHeroComponent', () => {
  let component: LanguagesHeroComponent;
  let fixture: ComponentFixture<LanguagesHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagesHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
