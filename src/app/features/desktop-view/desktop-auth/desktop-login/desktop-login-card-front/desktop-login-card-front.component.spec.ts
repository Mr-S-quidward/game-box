import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopLoginCardFrontComponent } from './desktop-login-card-front.component';

describe('DesktopLoginCardFrontComponent', () => {
  let component: DesktopLoginCardFrontComponent;
  let fixture: ComponentFixture<DesktopLoginCardFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopLoginCardFrontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopLoginCardFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
