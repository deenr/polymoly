import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurvedTextComponent } from './curved-text.component';

describe('CurvedTextComponent', () => {
  let component: CurvedTextComponent;
  let fixture: ComponentFixture<CurvedTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurvedTextComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CurvedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
