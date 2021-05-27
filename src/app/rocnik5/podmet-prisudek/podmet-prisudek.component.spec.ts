import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodmetPrisudekComponent } from './podmet-prisudek.component';

describe('PodmetPrisudekComponent', () => {
  let component: PodmetPrisudekComponent;
  let fixture: ComponentFixture<PodmetPrisudekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodmetPrisudekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodmetPrisudekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
