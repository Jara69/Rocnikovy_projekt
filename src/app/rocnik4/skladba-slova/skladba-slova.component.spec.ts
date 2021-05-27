import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkladbaSlovaComponent } from './skladba-slova.component';

describe('SkladbaSlovaComponent', () => {
  let component: SkladbaSlovaComponent;
  let fixture: ComponentFixture<SkladbaSlovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkladbaSlovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkladbaSlovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
