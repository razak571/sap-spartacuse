import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshProductListComponent } from './fresh-product-list.component';

describe('FreshProductListComponent', () => {
  let component: FreshProductListComponent;
  let fixture: ComponentFixture<FreshProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreshProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
