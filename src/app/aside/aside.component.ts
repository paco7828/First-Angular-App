import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  adSrcs = [
    "https://s13emagst.akamaized.net/products/51817/51816867/images/res_3f429b864fc332da5d3136c09d0b973c.jpg?width=720&height=720&hash=4E9B9E57C9DB4B098C4C1EBAD5731325",
    "https://s13emagst.akamaized.net/products/46487/46486705/images/res_d3be6b43f6dee7afbe25b6fac26693f1.jpg?width=720&height=720&hash=BB48A12B11E6D25BD5A713AE04C37CD6",
    "https://s13emagst.akamaized.net/products/47197/47196341/images/res_d7653d597f587aac6ffd9c214f9f3595.jpg?width=720&height=720&hash=FEBDA2D5B498996B4AF17FA5A1C79E82",
    "https://s13emagst.akamaized.net/products/28232/28231115/images/res_e1e8491411de2d7fd11fdae28237787d.jpg?width=720&height=720&hash=D500568CE020953E55DF640175FA472B"
  ];

  adAnimation() {
    let adImgs = document.querySelectorAll("aside .ad-div img") as NodeListOf<HTMLElement>;
    for (let i = 0; i < adImgs.length; i++) {
      setTimeout(() => {
        adImgs.forEach(element => element.style.border = "none")
        adImgs[i].style.border = "5px solid red";
      }, 1000 * i);
    }
  }

  visitImgLink(src: string) {
    window.open(src);
  }
}
