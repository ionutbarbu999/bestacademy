import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishWithAdeComponent } from './english-with-ade.component';

describe('EnglishWithAdeComponent', () => {
  let component: EnglishWithAdeComponent;
  let fixture: ComponentFixture<EnglishWithAdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishWithAdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishWithAdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
