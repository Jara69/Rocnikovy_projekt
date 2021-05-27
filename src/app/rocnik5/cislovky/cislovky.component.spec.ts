import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CislovkyComponent } from './cislovky.component';

describe('CislovkyComponent', () => {
  let component: CislovkyComponent;
  let fixture: ComponentFixture<CislovkyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CislovkyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CislovkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
