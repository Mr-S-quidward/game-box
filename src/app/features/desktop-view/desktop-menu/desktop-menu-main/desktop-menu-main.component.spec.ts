import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopMenuMainComponent } from './desktop-menu-main.component';

describe('DesktopMenuMainComponent', () => {
  let component: DesktopMenuMainComponent;
  let fixture: ComponentFixture<DesktopMenuMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopMenuMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopMenuMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
