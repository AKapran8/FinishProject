import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByIdInformationComponent } from './product-by-id-information.component';

describe('ProductByIdInformationComponent', () => {
  let component: ProductByIdInformationComponent;
  let fixture: ComponentFixture<ProductByIdInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductByIdInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductByIdInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
