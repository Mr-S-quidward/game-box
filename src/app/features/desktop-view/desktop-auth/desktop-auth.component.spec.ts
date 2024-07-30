import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopAuthComponent } from './desktop-auth.component';

describe('DesktopAuthComponent', () => {
  let component: DesktopAuthComponent;
  let fixture: ComponentFixture<DesktopAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
