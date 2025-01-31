import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  imagePath = "assets/Marca_Bons_Fluidos1.png"
}
