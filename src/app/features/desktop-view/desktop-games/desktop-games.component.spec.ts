import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopGamesComponent } from './desktop-games.component';

describe('DesktopGamesComponent', () => {
  let component: DesktopGamesComponent;
  let fixture: ComponentFixture<DesktopGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopGamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
