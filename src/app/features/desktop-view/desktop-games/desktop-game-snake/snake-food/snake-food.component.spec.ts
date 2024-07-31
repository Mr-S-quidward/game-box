import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakeFoodComponent } from './snake-food.component';

describe('SnakeFoodComponent', () => {
  let component: SnakeFoodComponent;
  let fixture: ComponentFixture<SnakeFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnakeFoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnakeFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
