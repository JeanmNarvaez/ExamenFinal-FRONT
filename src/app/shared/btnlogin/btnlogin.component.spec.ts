import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnloginComponent } from './btnlogin.component';

describe('BtnloginComponent', () => {
  let component: BtnloginComponent;
  let fixture: ComponentFixture<BtnloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnloginComponent]
    });
    fixture = TestBed.createComponent(BtnloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
