import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouhlaskyKonecSlovaComponent } from './souhlasky-konec-slova.component';

describe('SouhlaskyKonecSlovaComponent', () => {
  let component: SouhlaskyKonecSlovaComponent;
  let fixture: ComponentFixture<SouhlaskyKonecSlovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouhlaskyKonecSlovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouhlaskyKonecSlovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
