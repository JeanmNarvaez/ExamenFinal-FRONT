import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetacarneComponent } from './recetacarne.component';

describe('RecetacarneComponent', () => {
  let component: RecetacarneComponent;
  let fixture: ComponentFixture<RecetacarneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecetacarneComponent]
    });
    fixture = TestBed.createComponent(RecetacarneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
