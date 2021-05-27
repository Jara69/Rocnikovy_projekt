import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slova2Component } from './slova2.component';

describe('Slova2Component', () => {
  let component: Slova2Component;
  let fixture: ComponentFixture<Slova2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slova2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slova2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
