import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodstJmenaZenComponent } from './podst-jmena-zen.component';

describe('PodstJmenaZenComponent', () => {
  let component: PodstJmenaZenComponent;
  let fixture: ComponentFixture<PodstJmenaZenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodstJmenaZenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodstJmenaZenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
