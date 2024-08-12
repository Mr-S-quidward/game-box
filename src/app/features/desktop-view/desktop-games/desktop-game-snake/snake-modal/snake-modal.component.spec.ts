import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakeModalComponent } from './snake-modal.component';

describe('SnakeModalComponent', () => {
  let component: SnakeModalComponent;
  let fixture: ComponentFixture<SnakeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnakeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnakeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
