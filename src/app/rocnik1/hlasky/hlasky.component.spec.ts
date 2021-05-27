import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HlaskyComponent } from './hlasky.component';

describe('HlaskyComponent', () => {
  let component: HlaskyComponent;
  let fixture: ComponentFixture<HlaskyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HlaskyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HlaskyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
