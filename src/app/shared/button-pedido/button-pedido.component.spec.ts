import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPedidoComponent } from './button-pedido.component';

describe('ButtonPedidoComponent', () => {
  let component: ButtonPedidoComponent;
  let fixture: ComponentFixture<ButtonPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonPedidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
