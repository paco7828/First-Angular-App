import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  jaratSzamok = [
    "1", "2", "2A", "3", "3E", "4", "4Y", "6", "7", "7Y", "8", "12", "13E", "13", "13Y", "14", "14Y", "15", "16", "20",
    "21", "21A", "22", "23", "23Y", "24", "25A", "25", "26", "27Y", "27", "28", "28A", "28Y", "29", "30", "30Y", "32",
    "32Y", "33", "34", "34Y", "35", "35Y", "36", "37", "38", "38Y", "39", "40", "41", "41Y", "41E", "42", "42Y", "43",
    "46", "47", "51", "52", "55", "60", "60A", "60Y", "61", "62", "73", "73Y", "82", "102", "102Y", "103", "104", "104E",
    "104A", "109E", "121", "140", "142", "913", "926", "932", "940", "941", "973"
  ];

  randomJarat() {
    let jaratokPs = document.querySelectorAll("main .jaratok p") as NodeListOf<HTMLElement>;
    jaratokPs.forEach(element => {
      element.style.color = "white"
      element.style.fontSize = "20px"
    });
    if (jaratokPs.length > 0) {
      let randomIndex = Math.floor(Math.random() * jaratokPs.length);
      jaratokPs[randomIndex].style.color = "red"
      jaratokPs[randomIndex].style.fontSize = "30px"
    }
    else {
      console.error("No paragraphs found");
    }
  }
}
