import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VelkaMalaComponent } from './velka-mala.component';

describe('VelkaMalaComponent', () => {
  let component: VelkaMalaComponent;
  let fixture: ComponentFixture<VelkaMalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VelkaMalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VelkaMalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
