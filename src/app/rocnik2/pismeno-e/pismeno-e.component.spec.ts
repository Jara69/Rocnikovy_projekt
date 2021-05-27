import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PismenoEComponent } from './pismeno-e.component';

describe('PismenoEComponent', () => {
  let component: PismenoEComponent;
  let fixture: ComponentFixture<PismenoEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PismenoEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PismenoEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
