import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioHomeComponent } from './servicio-home.component';

describe('ServicioHomeComponent', () => {
  let component: ServicioHomeComponent;
  let fixture: ComponentFixture<ServicioHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
