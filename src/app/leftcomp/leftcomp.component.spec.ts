import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftcompComponent } from './leftcomp.component';

describe('LeftcompComponent', () => {
  let component: LeftcompComponent;
  let fixture: ComponentFixture<LeftcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
