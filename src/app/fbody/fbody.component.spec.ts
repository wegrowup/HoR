import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbodyComponent } from './fbody.component';

describe('FbodyComponent', () => {
  let component: FbodyComponent;
  let fixture: ComponentFixture<FbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
