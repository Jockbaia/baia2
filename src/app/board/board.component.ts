import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {
  @Input() note: number = 0;
  audio = new Audio();

  ngOnInit() {
    this.audio.src = "assets/piano/" + this.note + ".mp3";
    this.audio.load();
  }

  playSound() {
    this.audio.play();
  }

}
