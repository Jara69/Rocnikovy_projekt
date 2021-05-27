import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodstJmenaStredComponent } from './podst-jmena-stred.component';

describe('PodstJmenaStredComponent', () => {
  let component: PodstJmenaStredComponent;
  let fixture: ComponentFixture<PodstJmenaStredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodstJmenaStredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodstJmenaStredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
