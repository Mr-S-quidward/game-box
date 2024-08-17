import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopLoginCardBackComponent } from './desktop-login-card-back.component';

describe('DesktopLoginCardBackComponent', () => {
  let component: DesktopLoginCardBackComponent;
  let fixture: ComponentFixture<DesktopLoginCardBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopLoginCardBackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopLoginCardBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
