import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByIdInfoComponent } from './product-by-id-info.component';

describe('ProductByIdInfoComponent', () => {
  let component: ProductByIdInfoComponent;
  let fixture: ComponentFixture<ProductByIdInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductByIdInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductByIdInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
