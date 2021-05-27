import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvojhlaskyHlaskyComponent } from './dvojhlasky-hlasky.component';

describe('DvojhlaskyHlaskyComponent', () => {
  let component: DvojhlaskyHlaskyComponent;
  let fixture: ComponentFixture<DvojhlaskyHlaskyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvojhlaskyHlaskyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvojhlaskyHlaskyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
