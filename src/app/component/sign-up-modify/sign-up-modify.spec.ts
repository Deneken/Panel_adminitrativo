import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpModify } from './sign-up-modify';

describe('SignUpModify', () => {
  let component: SignUpModify;
  let fixture: ComponentFixture<SignUpModify>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpModify]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpModify);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
