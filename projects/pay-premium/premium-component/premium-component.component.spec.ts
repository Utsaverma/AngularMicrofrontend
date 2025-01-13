import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumComponentComponent } from './premium-component.component';

describe('PremiumComponentComponent', () => {
  let component: PremiumComponentComponent;
  let fixture: ComponentFixture<PremiumComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiumComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiumComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
