import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnhamburguesaComponent } from './btnhamburguesa.component';

describe('BtnhamburguesaComponent', () => {
  let component: BtnhamburguesaComponent;
  let fixture: ComponentFixture<BtnhamburguesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnhamburguesaComponent]
    });
    fixture = TestBed.createComponent(BtnhamburguesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
