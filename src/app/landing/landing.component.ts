import { CommonModule } from '@angular/common';

import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
  typingText: string = '';
  private fullText: string = 'CourseWave';
  private typingSpeed: number = 150; // Speed of typing effect

  ngOnInit(): void {
    this.typeText();
  }

  private typeText(): void {
    let charIndex = 0;

    const type = () => {
      if (charIndex < this.fullText.length) {
        this.typingText += this.fullText.charAt(charIndex);
        charIndex++;
        setTimeout(type, this.typingSpeed);
      }
    };

    type();
  }
  

}
