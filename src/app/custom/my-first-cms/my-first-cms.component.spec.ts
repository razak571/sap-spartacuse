import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstCmsComponent } from './my-first-cms.component';

describe('MyFirstCmsComponent', () => {
  let component: MyFirstCmsComponent;
  let fixture: ComponentFixture<MyFirstCmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFirstCmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
