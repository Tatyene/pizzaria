import { Component } from '@angular/core';
import { ButtonPedidoComponent } from '../../shared/button-pedido/button-pedido.component';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [ButtonPedidoComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {

}
