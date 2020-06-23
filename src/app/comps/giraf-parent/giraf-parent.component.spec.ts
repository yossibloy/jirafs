import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirafParentComponent } from './giraf-parent.component';

describe('GirafParentComponent', () => {
  let component: GirafParentComponent;
  let fixture: ComponentFixture<GirafParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirafParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirafParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
