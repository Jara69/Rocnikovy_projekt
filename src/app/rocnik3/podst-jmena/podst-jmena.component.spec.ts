import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodstJmenaComponent } from './podst-jmena.component';

describe('PodstJmenaComponent', () => {
  let component: PodstJmenaComponent;
  let fixture: ComponentFixture<PodstJmenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodstJmenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodstJmenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
