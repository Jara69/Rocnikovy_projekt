import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlovniDruhyComponent } from './slovni-druhy.component';

describe('SlovniDruhyComponent', () => {
  let component: SlovniDruhyComponent;
  let fixture: ComponentFixture<SlovniDruhyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlovniDruhyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlovniDruhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
