import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPolyCardComponent } from './front-poly-card.component';

describe('FrontPolyCardComponent', () => {
  let component: FrontPolyCardComponent;
  let fixture: ComponentFixture<FrontPolyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrontPolyCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FrontPolyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
