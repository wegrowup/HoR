import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseSingUpComponent } from './entreprise-sing-up.component';

describe('EntrepriseSingUpComponent', () => {
  let component: EntrepriseSingUpComponent;
  let fixture: ComponentFixture<EntrepriseSingUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrepriseSingUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseSingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
