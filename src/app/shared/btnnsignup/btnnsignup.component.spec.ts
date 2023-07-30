import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnnsignupComponent } from './btnnsignup.component';

describe('BtnnsignupComponent', () => {
  let component: BtnnsignupComponent;
  let fixture: ComponentFixture<BtnnsignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnnsignupComponent]
    });
    fixture = TestBed.createComponent(BtnnsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
