import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtncarneComponent } from './btncarne.component';

describe('BtncarneComponent', () => {
  let component: BtncarneComponent;
  let fixture: ComponentFixture<BtncarneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtncarneComponent]
    });
    fixture = TestBed.createComponent(BtncarneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
