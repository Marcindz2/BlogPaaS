import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stronaglowna } from './stronaglowna';

describe('Stronaglowna', () => {
  let component: Stronaglowna;
  let fixture: ComponentFixture<Stronaglowna>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stronaglowna]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stronaglowna);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
