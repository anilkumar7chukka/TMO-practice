import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpTableDummyComponent } from './emp-table-dummy.component';

describe('EmpTableDummyComponent', () => {
  let component: EmpTableDummyComponent;
  let fixture: ComponentFixture<EmpTableDummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpTableDummyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpTableDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
