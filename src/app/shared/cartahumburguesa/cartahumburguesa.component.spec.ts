import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartahumburguesaComponent } from './cartahumburguesa.component';

describe('CartahumburguesaComponent', () => {
  let component: CartahumburguesaComponent;
  let fixture: ComponentFixture<CartahumburguesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartahumburguesaComponent]
    });
    fixture = TestBed.createComponent(CartahumburguesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
