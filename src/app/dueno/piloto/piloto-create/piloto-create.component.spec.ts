import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotoCreateComponent } from './piloto-create.component';

describe('PilotoCreateComponent', () => {
  let component: PilotoCreateComponent;
  let fixture: ComponentFixture<PilotoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
