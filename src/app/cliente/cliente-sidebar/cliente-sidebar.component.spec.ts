import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteSidebarComponent } from './cliente-sidebar.component';

describe('ClienteSidebarComponent', () => {
  let component: ClienteSidebarComponent;
  let fixture: ComponentFixture<ClienteSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
