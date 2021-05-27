import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VyjmSlovaComponent } from './vyjm-slova.component';

describe('VyjmSlovaComponent', () => {
  let component: VyjmSlovaComponent;
  let fixture: ComponentFixture<VyjmSlovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VyjmSlovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VyjmSlovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
