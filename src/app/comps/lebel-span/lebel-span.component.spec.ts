import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LebelSpanComponent } from './lebel-span.component';

describe('LebelSpanComponent', () => {
  let component: LebelSpanComponent;
  let fixture: ComponentFixture<LebelSpanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LebelSpanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LebelSpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
