import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopGameSnakeComponent } from './desktop-game-snake.component';

describe('DesktopSnakeGameComponent', () => {
  let component: DesktopGameSnakeComponent;
  let fixture: ComponentFixture<DesktopGameSnakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopGameSnakeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopGameSnakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
