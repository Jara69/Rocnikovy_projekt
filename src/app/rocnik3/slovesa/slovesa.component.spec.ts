import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlovesaComponent } from './slovesa.component';

describe('SlovesaComponent', () => {
  let component: SlovesaComponent;
  let fixture: ComponentFixture<SlovesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlovesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlovesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
