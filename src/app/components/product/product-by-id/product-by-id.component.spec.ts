import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByIdComponent } from './product-by-id.component';

describe('ProductByIdComponent', () => {
  let component: ProductByIdComponent;
  let fixture: ComponentFixture<ProductByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
