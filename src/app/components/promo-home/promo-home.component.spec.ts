import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoHomeComponent } from './promo-home.component';

describe('PromoHomeComponent', () => {
  let component: PromoHomeComponent;
  let fixture: ComponentFixture<PromoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromoHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
