import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StavbaSlovaComponent } from './stavba-slova.component';

describe('StavbaSlovaComponent', () => {
  let component: StavbaSlovaComponent;
  let fixture: ComponentFixture<StavbaSlovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StavbaSlovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StavbaSlovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
