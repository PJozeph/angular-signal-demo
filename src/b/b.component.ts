import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CComponent } from '../c/c.component';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [CComponent, NgIf],
  template: `
    <div class="container">
      <p>B Component</p>
      <app-c></app-c>
    </div>
  `,
  styleUrl: './b.component.css',
})
export class BComponent {
  ngDoCheck() {
    console.log('B Component ngDoCheck');
  }
}
