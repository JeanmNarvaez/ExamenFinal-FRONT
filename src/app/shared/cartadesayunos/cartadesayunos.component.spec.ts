import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartadesayunosComponent } from './cartadesayunos.component';

describe('CartadesayunosComponent', () => {
  let component: CartadesayunosComponent;
  let fixture: ComponentFixture<CartadesayunosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartadesayunosComponent]
    });
    fixture = TestBed.createComponent(CartadesayunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
