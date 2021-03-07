import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBtnComponent } from './app-btn.component';

describe('AppBtnComponent', () => {
  let component: AppBtnComponent;
  let fixture: ComponentFixture<AppBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
