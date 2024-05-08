import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  router = new Router;

  onHome(){
    this.router.navigate([''])
  }

  onPromo(){
    this.router.navigate(['promo'])
  }

  onLocal() {
    this.router.navigate(['local'])
  }

  onPedir() {
    this.router.navigate(['comopedir'])
  }

  onSobre() {
    this.router.navigate(['sobre'])
  }
}
