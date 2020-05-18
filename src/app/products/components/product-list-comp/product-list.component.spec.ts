import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListCompComponent } from './product-list.component';

describe('ProductListCompComponent', () => {
  let component: ProductListCompComponent;
  let fixture: ComponentFixture<ProductListCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
