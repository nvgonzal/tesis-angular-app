import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCardsComponent } from './cliente-cards.component';

describe('ClienteCardsComponent', () => {
  let component: ClienteCardsComponent;
  let fixture: ComponentFixture<ClienteCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
