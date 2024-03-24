import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footerLinks = ["Kapcsolat", "Üzletszabályzat", "Ügyfélszolgálat", "Társadalmi egyeztetés"];

  visitRealSite(){
    window.open("https://mobilitas.biokom.hu/menetrend")
  }
}
