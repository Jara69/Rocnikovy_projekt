import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlabikyComponent } from './slabiky.component';

describe('SlabikyComponent', () => {
  let component: SlabikyComponent;
  let fixture: ComponentFixture<SlabikyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlabikyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlabikyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
