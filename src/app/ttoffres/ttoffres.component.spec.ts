import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TtoffresComponent } from './ttoffres.component';

describe('TtoffresComponent', () => {
  let component: TtoffresComponent;
  let fixture: ComponentFixture<TtoffresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtoffresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtoffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
