import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuLinkComponent } from './cu-link.component';

describe('CuLinkComponent', () => {
  let component: CuLinkComponent;
  let fixture: ComponentFixture<CuLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
