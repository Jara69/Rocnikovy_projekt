import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlovaComponent } from './slova.component';

describe('SlovaComponent', () => {
  let component: SlovaComponent;
  let fixture: ComponentFixture<SlovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
