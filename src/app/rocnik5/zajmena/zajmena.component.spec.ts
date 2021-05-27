import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZajmenaComponent } from './zajmena.component';

describe('ZajmenaComponent', () => {
  let component: ZajmenaComponent;
  let fixture: ComponentFixture<ZajmenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZajmenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZajmenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
