import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetahamburguesaComponent } from './recetahamburguesa.component';

describe('RecetahamburguesaComponent', () => {
  let component: RecetahamburguesaComponent;
  let fixture: ComponentFixture<RecetahamburguesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecetahamburguesaComponent]
    });
    fixture = TestBed.createComponent(RecetahamburguesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
