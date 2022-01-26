import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditFixedDepositProductComponent } from './edit-fixed-deposit-product.component';

describe('EditFixedDepositProductComponent', () => {
  let component: EditFixedDepositProductComponent;
  let fixture: ComponentFixture<EditFixedDepositProductComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFixedDepositProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFixedDepositProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
