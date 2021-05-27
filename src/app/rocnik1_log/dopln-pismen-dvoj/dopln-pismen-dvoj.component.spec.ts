import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoplnPismenDvojComponent } from './dopln-pismen-dvoj.component';

describe('DoplnPismenDvojComponent', () => {
  let component: DoplnPismenDvojComponent;
  let fixture: ComponentFixture<DoplnPismenDvojComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoplnPismenDvojComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoplnPismenDvojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
