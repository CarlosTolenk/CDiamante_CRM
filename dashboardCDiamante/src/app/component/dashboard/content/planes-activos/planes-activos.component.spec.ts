import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesActivosComponent } from './planes-activos.component';

describe('PlanesActivosComponent', () => {
  let component: PlanesActivosComponent;
  let fixture: ComponentFixture<PlanesActivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanesActivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanesActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
