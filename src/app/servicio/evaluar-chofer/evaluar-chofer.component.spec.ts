import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluarChoferComponent } from './evaluar-chofer.component';

describe('EvaluarChoferComponent', () => {
  let component: EvaluarChoferComponent;
  let fixture: ComponentFixture<EvaluarChoferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluarChoferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluarChoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
