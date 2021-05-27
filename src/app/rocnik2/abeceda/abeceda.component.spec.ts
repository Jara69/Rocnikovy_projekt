import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbecedaComponent } from './abeceda.component';

describe('AbecedaComponent', () => {
  let component: AbecedaComponent;
  let fixture: ComponentFixture<AbecedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbecedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbecedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
