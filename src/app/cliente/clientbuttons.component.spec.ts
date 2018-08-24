import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientbuttonsComponent } from './clientbuttons.component';

describe('ClientbuttonsComponent', () => {
  let component: ClientbuttonsComponent;
  let fixture: ComponentFixture<ClientbuttonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientbuttonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
