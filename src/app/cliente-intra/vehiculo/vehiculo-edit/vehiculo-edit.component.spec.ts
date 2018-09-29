import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoEditComponent } from './vehiculo-edit.component';

describe('VehiculoEditComponent', () => {
  let component: VehiculoEditComponent;
  let fixture: ComponentFixture<VehiculoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
