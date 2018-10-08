import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingPayComponent } from './waiting-pay.component';

describe('WaitingPayComponent', () => {
  let component: WaitingPayComponent;
  let fixture: ComponentFixture<WaitingPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
