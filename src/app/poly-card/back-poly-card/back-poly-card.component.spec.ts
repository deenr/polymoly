import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackPolyCardComponent } from './back-poly-card.component';

describe('BackPolyCardComponent', () => {
  let component: BackPolyCardComponent;
  let fixture: ComponentFixture<BackPolyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackPolyCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BackPolyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
