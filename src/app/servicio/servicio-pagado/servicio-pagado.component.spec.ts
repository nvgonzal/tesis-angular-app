import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioPagadoComponent } from './servicio-pagado.component';

describe('ServicioPagadoComponent', () => {
  let component: ServicioPagadoComponent;
  let fixture: ComponentFixture<ServicioPagadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioPagadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioPagadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
