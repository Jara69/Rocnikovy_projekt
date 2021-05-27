import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodstJmenaMuzComponent } from './podst-jmena-muz.component';

describe('PodstJmenaMuzComponent', () => {
  let component: PodstJmenaMuzComponent;
  let fixture: ComponentFixture<PodstJmenaMuzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodstJmenaMuzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodstJmenaMuzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
