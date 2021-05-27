import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamohlaskySouhlaskyComponent } from './samohlasky-souhlasky.component';

describe('SamohlaskySouhlaskyComponent', () => {
  let component: SamohlaskySouhlaskyComponent;
  let fixture: ComponentFixture<SamohlaskySouhlaskyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamohlaskySouhlaskyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamohlaskySouhlaskyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
