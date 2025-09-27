import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employed } from './employed';

describe('Employed', () => {
  let component: Employed;
  let fixture: ComponentFixture<Employed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Employed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
