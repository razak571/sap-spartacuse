import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockCartComponent } from './mock-cart.component';

describe('MockCartComponent', () => {
  let component: MockCartComponent;
  let fixture: ComponentFixture<MockCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
