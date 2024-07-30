import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopAuthMainComponent } from './desktop-auth-main.component';

describe('DesktopAuthMainComponent', () => {
  let component: DesktopAuthMainComponent;
  let fixture: ComponentFixture<DesktopAuthMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopAuthMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopAuthMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
