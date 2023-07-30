import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnpizzaComponent } from './btnpizza.component';

describe('BtnpizzaComponent', () => {
  let component: BtnpizzaComponent;
  let fixture: ComponentFixture<BtnpizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnpizzaComponent]
    });
    fixture = TestBed.createComponent(BtnpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
