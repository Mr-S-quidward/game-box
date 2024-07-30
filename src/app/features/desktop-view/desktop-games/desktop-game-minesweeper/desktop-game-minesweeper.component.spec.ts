import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopGameMinesweeperComponent } from './desktop-game-minesweeper.component';

describe('DesktopMinesweeperGameComponent', () => {
  let component: DesktopGameMinesweeperComponent;
  let fixture: ComponentFixture<DesktopGameMinesweeperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopGameMinesweeperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopGameMinesweeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
