import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlovniDruhy4Component } from './slovni-druhy4.component';

describe('SlovniDruhy4Component', () => {
  let component: SlovniDruhy4Component;
  let fixture: ComponentFixture<SlovniDruhy4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlovniDruhy4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlovniDruhy4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
