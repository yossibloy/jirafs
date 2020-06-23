import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetilsComponent } from './detils.component';

describe('DetilsComponent', () => {
  let component: DetilsComponent;
  let fixture: ComponentFixture<DetilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
