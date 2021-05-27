import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VyznamSlovComponent } from './vyznam-slov.component';

describe('VyznamSlovComponent', () => {
  let component: VyznamSlovComponent;
  let fixture: ComponentFixture<VyznamSlovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VyznamSlovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VyznamSlovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
