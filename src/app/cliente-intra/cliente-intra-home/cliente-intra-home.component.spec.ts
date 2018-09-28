import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteIntraHomeComponent } from './cliente-intra-home.component';

describe('ClienteIntraHomeComponent', () => {
  let component: ClienteIntraHomeComponent;
  let fixture: ComponentFixture<ClienteIntraHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteIntraHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteIntraHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
