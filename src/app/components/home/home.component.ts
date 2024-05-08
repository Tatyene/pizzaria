import { Component } from '@angular/core';
import { ButtonPedidoComponent } from '../../shared/button-pedido/button-pedido.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonPedidoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
