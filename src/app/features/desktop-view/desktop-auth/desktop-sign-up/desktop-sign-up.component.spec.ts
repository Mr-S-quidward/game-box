import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopSignUpComponent } from './desktop-sign-up.component';

describe('DesktopSignUpComponent', () => {
  let component: DesktopSignUpComponent;
  let fixture: ComponentFixture<DesktopSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopSignUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
