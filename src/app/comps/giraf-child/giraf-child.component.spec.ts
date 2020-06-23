import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirafChildComponent } from './giraf-child.component';

describe('GirafChildComponent', () => {
  let component: GirafChildComponent;
  let fixture: ComponentFixture<GirafChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirafChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirafChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
