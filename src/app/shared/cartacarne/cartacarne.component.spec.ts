import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartacarneComponent } from './cartacarne.component';

describe('CartacarneComponent', () => {
  let component: CartacarneComponent;
  let fixture: ComponentFixture<CartacarneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartacarneComponent]
    });
    fixture = TestBed.createComponent(CartacarneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
