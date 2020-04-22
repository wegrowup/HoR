import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightcompComponent } from './rightcomp.component';

describe('RightcompComponent', () => {
  let component: RightcompComponent;
  let fixture: ComponentFixture<RightcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
