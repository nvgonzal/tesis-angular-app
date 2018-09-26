import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagarPaypalComponent } from './pagar-paypal.component';

describe('PagarPaypalComponent', () => {
  let component: PagarPaypalComponent;
  let fixture: ComponentFixture<PagarPaypalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagarPaypalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagarPaypalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
