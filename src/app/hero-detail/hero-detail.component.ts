import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { NgIf, UpperCasePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
  imports: [FormsModule, NgIf, UpperCasePipe]
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
