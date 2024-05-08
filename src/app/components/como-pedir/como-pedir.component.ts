import { Component } from '@angular/core';
import { ButtonPedidoComponent } from '../../shared/button-pedido/button-pedido.component';

@Component({
  selector: 'app-como-pedir',
  standalone: true,
  imports: [ButtonPedidoComponent],
  templateUrl: './como-pedir.component.html',
  styleUrl: './como-pedir.component.css'
})
export class ComoPedirComponent {

}
