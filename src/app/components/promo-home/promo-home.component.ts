import { Component } from '@angular/core';
import { ButtonPedidoComponent } from '../../shared/button-pedido/button-pedido.component';

@Component({
  selector: 'app-promo-home',
  standalone: true,
  imports: [ButtonPedidoComponent],
  templateUrl: './promo-home.component.html',
  styleUrl: './promo-home.component.css'
})
export class PromoHomeComponent {

}
