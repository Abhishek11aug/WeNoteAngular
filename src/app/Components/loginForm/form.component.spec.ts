import { ComponentFixture, TestBed } from '@angular/core/testing';

import { loginFormComponent } from './form.component';

describe('FormComponent', () => {
  let component: loginFormComponent;
  let fixture: ComponentFixture<loginFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [loginFormComponent]
    });
    fixture = TestBed.createComponent(loginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
