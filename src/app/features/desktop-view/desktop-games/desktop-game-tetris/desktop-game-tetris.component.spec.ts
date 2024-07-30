import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopGameTetrisComponent } from './desktop-game-tetris.component';

describe('DesktopTetrisGameComponent', () => {
  let component: DesktopGameTetrisComponent;
  let fixture: ComponentFixture<DesktopGameTetrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopGameTetrisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopGameTetrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
