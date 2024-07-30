import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopGamesMainComponent } from './desktop-games-main.component';

describe('DesktopGamesMainComponent', () => {
  let component: DesktopGamesMainComponent;
  let fixture: ComponentFixture<DesktopGamesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopGamesMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopGamesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
