import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initFlowbite } from 'flowbite';



@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {

  ngOnInit(): void {
    initFlowbite();
  }
}
