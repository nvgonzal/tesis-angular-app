import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotoListComponent } from './piloto-list.component';

describe('PilotoListComponent', () => {
  let component: PilotoListComponent;
  let fixture: ComponentFixture<PilotoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
