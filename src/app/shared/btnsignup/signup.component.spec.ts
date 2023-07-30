import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnsignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: BtnsignupComponent;
  let fixture: ComponentFixture<BtnsignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnsignupComponent]
    });
    fixture = TestBed.createComponent(BtnsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
