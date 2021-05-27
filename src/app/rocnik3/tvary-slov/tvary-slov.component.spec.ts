import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvarySlovComponent } from './tvary-slov.component';

describe('TvarySlovComponent', () => {
  let component: TvarySlovComponent;
  let fixture: ComponentFixture<TvarySlovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvarySlovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvarySlovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
