import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByIDComponent } from './product-by-id.component';

describe('ProductByIDComponent', () => {
  let component: ProductByIDComponent;
  let fixture: ComponentFixture<ProductByIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductByIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductByIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
