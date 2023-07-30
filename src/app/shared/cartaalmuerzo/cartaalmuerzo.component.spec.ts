import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaalmuerzoComponent } from './cartaalmuerzo.component';

describe('CartaalmuerzoComponent', () => {
  let component: CartaalmuerzoComponent;
  let fixture: ComponentFixture<CartaalmuerzoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartaalmuerzoComponent]
    });
    fixture = TestBed.createComponent(CartaalmuerzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
