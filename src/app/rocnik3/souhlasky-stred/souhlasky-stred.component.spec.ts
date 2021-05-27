import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouhlaskyStredComponent } from './souhlasky-stred.component';

describe('SouhlaskyStredComponent', () => {
  let component: SouhlaskyStredComponent;
  let fixture: ComponentFixture<SouhlaskyStredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouhlaskyStredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouhlaskyStredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
