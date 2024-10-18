import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolyCardComponent } from './poly-card.component';

describe('PolyCardComponent', () => {
  let component: PolyCardComponent;
  let fixture: ComponentFixture<PolyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PolyCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PolyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
