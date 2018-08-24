import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaSidebarComponent } from './empresa-sidebar.component';

describe('EmpresaSidebarComponent', () => {
  let component: EmpresaSidebarComponent;
  let fixture: ComponentFixture<EmpresaSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
