import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetyComponent } from './vety.component';

describe('VetyComponent', () => {
  let component: VetyComponent;
  let fixture: ComponentFixture<VetyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
