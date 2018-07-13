import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientosRecienteComponent } from './movimientos-reciente.component';

describe('MovimientosRecienteComponent', () => {
  let component: MovimientosRecienteComponent;
  let fixture: ComponentFixture<MovimientosRecienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimientosRecienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientosRecienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
